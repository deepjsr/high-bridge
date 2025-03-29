export const mockWorkflowData = Array(20)
  .fill(null)
  .map((_, index) => ({
    id: `#494`,
    name: `Workflow Name here...`,
    lastEditedBy: "Zubin Khanna",
    lastEditedTime: "22:43 IST",
    lastEditedDate: "28/05",
    description: "Some Description Here Regarding The Flow..",
    timeline: [
      {
        date: "28/05",
        time: "22:43 IST",
        status: index % 3 === 0 ? "Passed" : "Failed",
        id: `timeline-${index}-1`,
      },
      {
        date: "28/05",
        time: "22:43 IST",
        status: "Failed",
        id: `timeline-${index}-2`,
      },
      {
        date: "28/05",
        time: "22:43 IST",
        status: "Failed",
        id: `timeline-${index}-3`,
      },
    ],
  }));
