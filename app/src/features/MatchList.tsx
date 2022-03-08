import {
  getMatches,
  GetMatchesResponse,
  GetMatchesVariables,
  Participant,
  Image,
} from "api";
import { useQuery } from "react-query";
import { Grid, Stack, Avatar, Typography } from "@mui/material";
import { Chip, TeamLogoIcon } from "components";
import moment from "moment";

interface MatchListProps {
  tournamentId?: string;
}
export default function MatchList({ tournamentId }: MatchListProps) {
  const queryVariables = {
    page: 1,
    limit: 10,
    q: tournamentId !== "ALL" ? `tournament:${tournamentId}` : undefined,
  };

  const data = useQuery<GetMatchesResponse, Error, GetMatchesVariables>(
    ["matches", tournamentId],
    () => getMatches(queryVariables)
  ).data as GetMatchesResponse;

  console.log({ data });

  return (
    <Stack gap={2}>
      {data.data.map((match) => {
        return (
          <Stack
            key={match.id}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            style={{
              padding: "12px 24px",
              backgroundColor: "#FFFFFF0D",
            }}
          >
            <Grid
              container
              alignItems="center"
              spacing={3}
              style={{
                width: "80%",
              }}
            >
              <Grid item md={1}>
                <Avatar
                  sx={{ width: 36, height: 36 }}
                  src={match.tournament.images[0].url}
                  alt={match.tournament.title}
                />
              </Grid>
              <Grid item md={2}>
                <div>
                  <Typography variant="caption" style={{ color: "#A9A9A9" }}>
                    {moment(match.start).format("MMMM Do, h:mm a")}
                  </Typography>
                  <div>
                    <Chip label="Live" />
                  </div>
                </div>
              </Grid>
              <Grid item md={2}>
                <Typography variant="body2" style={{ color: "#A9A9A9" }}>
                  {match.tournament.title}
                </Typography>
              </Grid>
              <Grid item md={7}>
                <MatchScore participants={match.participants} />
              </Grid>
            </Grid>
            <div>action buttons</div>
          </Stack>
        );
      })}
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
