import { Stack, Typography, styled } from "@mui/material";
import { Button } from "components";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface FilterTournamentsProps {
  onChange?(id: string): void;
  onlyIcon?: boolean;
  value?: "ALL" | number;
}
export default function FilterTournaments({
  onChange,
  onlyIcon = false,
  value = "ALL",
}: FilterTournamentsProps) {
  return (
    <FilterTournamentWrapper direction="row" spacing={2}>
      <Button
        style={{
          borderBottom: "2px solid #80BAD6",
        }}
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
      <Button>
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
      <Button>
        <MoreHorizIcon />
      </Button>
    </FilterTournamentWrapper>
  );
}

const FilterTournamentWrapper = styled(Stack)({
  border: "1px solid rgba(255, 255, 255, 0.05)",
});
