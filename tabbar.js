<Tabs orientation="vertical" value={selected} onChange={handleTabSelect}>
  <Tab
    icon={<HomeIcon />}
    style={{ color: "rgb(28, 36, 105)" }}
    label="Home"
  ></Tab>

  <Tab
    icon={<ExploreIcon />}
    style={{ color: "rgb(28, 36, 105)" }}
    label="Explore"
  ></Tab>
  <Tab
    icon={<QuestionMarkIcon />}
    style={{ color: "rgb(28, 36, 105)" }}
    label="My Topics"
  ></Tab>
  <Tab
    icon={<QuestionAnswerIcon />}
    style={{ color: "rgb(28, 36, 105)" }}
    label="My Answers"
  ></Tab>
</Tabs>;
