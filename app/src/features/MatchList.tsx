import { getMatches, Participant, Match } from "api";
import { useInfiniteQuery } from "react-query";
import { Grid as MuiGrid, Stack, Avatar, Typography } from "@mui/material";
import { Chip, TeamLogoIcon, Spinner } from "components";
import moment from "moment";
import { useRef, useCallback } from "react";

const LIMIT = 10;

interface MatchListProps {
  tournamentId?: string;
}
export default function MatchList({ tournamentId }: MatchListProps) {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery(
      ["matches", tournamentId],
      ({ pageParam }) => {
        return getMatches({
          page: pageParam ?? 1,
          limit: LIMIT,
          q: tournamentId !== "ALL" ? `tournament:${tournamentId}` : undefined,
        });
      },
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.hasNext) {
            return lastPage.page + 1;
          }
        },
      }
    );

  const observer = useRef<IntersectionObserver | null>(null);
  const lastMatchElementRef = useCallback(
    (node: Element) => {
      if (status === "loading") {
        return;
      }

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          fetchNextPage();
        }
      });

      if (node) {
        observer.current.observe(node);
      }
    },
    [status, fetchNextPage]
  );

  if (status === "loading") return <Spinner />;

  const matches: Match[] =
    data?.pages.reduce((acc, page) => {
      // @ts-ignore
      return acc.concat(...page.data);
    }, []) ?? [];

  return (
    <Stack gap={2}>
      {matches.map((match, idx) => {
        return (
          <Stack
            key={match.id}
            ref={idx === matches.length - 1 ? lastMatchElementRef : null}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{
              padding: "12px 24px",
              backgroundColor: "#FFFFFF0D",
            }}
          >
            <MuiGrid
              container
              alignItems="center"
              spacing={3}
              style={{
                width: "80%",
              }}
            >
              <MuiGrid item md={1}>
                <Avatar
                  sx={{ width: 36, height: 36 }}
                  src={match.tournament.images[0].url}
                  alt={match.tournament.title}
                />
              </MuiGrid>
              <MuiGrid item md={2}>
                <div>
                  <Typography variant="caption" style={{ color: "#A9A9A9" }}>
                    {moment(match.start).format("MMMM Do, h:mm a")}
                  </Typography>
                  <div>
                    <Chip label="Live" />
                  </div>
                </div>
              </MuiGrid>
              <MuiGrid item md={2}>
                <Typography variant="body2" style={{ color: "#A9A9A9" }}>
                  {match.tournament.title}
                </Typography>
              </MuiGrid>
              <MuiGrid item md={7}>
                <MatchScore participants={match.participants} />
              </MuiGrid>
            </MuiGrid>
            <div>action buttons</div>
          </Stack>
        );
      })}
      {isFetchingNextPage && <Spinner />}
      {!hasNextPage && matches.length > LIMIT && (
        <Typography align="center">No more data to load.</Typography>
      )}
    </Stack>
  );
}

interface MatchScoreProps {
  participants: Participant[];
}
function MatchScore({ participants }: MatchScoreProps) {
  const [leftParticipant, rightParticipant] = participants;

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <TeamInfo
        imageUrl={leftParticipant.team.images[0]?.url}
        name={leftParticipant.team.name}
      />
      <Typography
        variant="body2"
        sx={{
          fontSize: "h5.fontSize",
          fontWeight: 700,
        }}
      >
        2
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "h5.fontSize",
          fontWeight: 700,
        }}
      >
        vs
      </Typography>
      <Typography
        variant="body2"
        sx={{
          fontSize: "h5.fontSize",
          fontWeight: 700,
        }}
      >
        2
      </Typography>
      <TeamInfo
        isReverse
        imageUrl={rightParticipant.team.images[0]?.url}
        name={rightParticipant.team.name}
      />
    </Stack>
  );
}

interface TeamProps {
  imageUrl: string;
  name: string;
  isReverse?: boolean;
}
function TeamInfo({ imageUrl = "", name, isReverse = false }: TeamProps) {
  return (
    <Stack
      gap={1}
      direction={isReverse ? "row-reverse" : "row"}
      alignItems="center"
    >
      <div>
        <Typography
          variant="body2"
          sx={{
            fontWeight: 700,
          }}
        >
          {name}
        </Typography>
      </div>
      {imageUrl !== "" ? (
        <Avatar sx={{ width: 36, height: 36 }} src={imageUrl} alt={name} />
      ) : (
        <Avatar sx={{ width: 36, height: 36 }}>
          <TeamLogoIcon />
        </Avatar>
      )}
    </Stack>
  );
}
