import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { Step } from "../../resources/CV";

type CVTimelineProps = {
  steps: Array<Step>;
};
const CVTimeline: React.FC<CVTimelineProps> = ({ steps }) => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {steps.map((item, i, row) => (
        <TimelineItem>
          <TimelineOppositeContent>{item.time}</TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot />
            {i + 1 !== row.length && <TimelineConnector />}
          </TimelineSeparator>
          <TimelineContent>
            {item.description}
            {item.optional && (
              <>
                <br />
                <i className="optionalText">{item.optional}</i>
              </>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default CVTimeline;
