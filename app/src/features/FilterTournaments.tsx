import { Stack, Typography, styled, Avatar, Tooltip } from "@mui/material";
import { Button } from "components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useQuery } from "react-query";
import {
  getTournaments,
  GetTournamentsResponse,
  GetTournamentsVariables,
} from "api";
import { MouseEventHandler } from "react";

export type ValueType = "ALL" | number;

interface FilterTournamentsProps {
  onChange?(val: ValueType): void;
  onlyIcon?: boolean;
  value?: ValueType;
  limit?: number;
}
export default function FilterTournaments({
  onChange,
  onlyIcon = false,
  value = "ALL",
  limit = 3,
}: FilterTournamentsProps) {
  const data = useQuery<GetTournamentsResponse, Error, GetTournamentsVariables>(
    ["tournaments", limit],
    () => getTournaments({ page: 1, limit })
  ).data as GetTournamentsResponse;

  function createChangeHandler(value: ValueType) {
    const handleChange: MouseEventHandler<HTMLButtonElement> = () => {
      onChange?.(value);
    };
    return handleChange;
  }

  const buttonStyles = {
    borderBottom: "2px solid #80BAD6",
  };

  function isMatched(_value: ValueType) {
    return value === _value;
  }

  return (
    <FilterTournamentWrapper direction="row" spacing={2}>
      <Button
        onClick={createChangeHandler("ALL")}
        style={isMatched("ALL") ? buttonStyles : undefined}
      >
        <Typography
          component="span"
          variant="body1"
          sx={{
            fontWeight: "bold",
          }}
        >
          All Tournaments
        </Typography>
      </Button>
      {data.data.map((tournament) => (
        <Tooltip key={tournament.id} title={tournament.title}>
          <Button
            onClick={createChangeHandler(tournament.id)}
            style={isMatched(tournament.id) ? buttonStyles : undefined}
          >
            <Avatar
              sx={{ width: 32, height: 32 }}
              src={tournament.images[0].url}
              alt={tournament.title}
              style={{
                marginRight: 6,
              }}
            />
            {!onlyIcon && (
              <Typography
                component="span"
                variant="body1"
                sx={{
                  fontWeight: "bold",
                }}
              >
                {tournament.short_title}
              </Typography>
            )}
          </Button>
        </Tooltip>
      ))}
      <Button>
        <MoreHorizIcon />
      </Button>
    </FilterTournamentWrapper>
  );
}

const FilterTournamentWrapper = styled(Stack)({
  border: "1px solid rgba(255, 255, 255, 0.05)",
});
