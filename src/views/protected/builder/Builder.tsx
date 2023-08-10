/* eslint-disable @typescript-eslint/no-explicit-any */
import { Box, Container, Grid, IconButton, Stack, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

import {
  AlignHorizontalCenter,
  AlignHorizontalLeft,
  AlignHorizontalRight,
  AlignVerticalCenter,
  AlignVerticalTop,
  AlignVerticalBottom,
  AlignVerticalTopOutlined,
  AlignVerticalCenterOutlined,
  AlignVerticalBottomOutlined,
  AlignHorizontalCenterOutlined,
  AlignHorizontalLeftOutlined,
  AlignHorizontalRightOutlined,
  TableRows,
  TableRowsOutlined,
  ViewColumn,
  ViewColumnOutlined,
  CopyAll,
} from "@mui/icons-material";
type ButtonProps = {
  border: number;
  borderRadius: number;
  color: string;
  fontSize: number;
  fontWeight: number;
  height: number;
  backgroundColor: string;
  margin: number;
  padding: number;
};
const DynamicButton = ({ style }: { style: ButtonProps }) => {
  const {
    border,
    padding,
    backgroundColor,
    color,
    fontWeight,
    height,
    margin,
    borderRadius,
    fontSize,
  } = style;
  return (
    <div>
      <button
        style={{
          border: `${border}px solid`,
          color: `${color}`,
          backgroundColor: `${backgroundColor}`,
          fontWeight: `${fontWeight}px`,
          height: `${height}px`,
          margin: `${margin}px`,
          borderRadius: `${borderRadius}px`,
          padding: `${padding}px`,
          fontSize: `${fontSize}px`,
        }}
      >
        Dynamic Button
      </button>
    </div>
  );
};
const init = {
  border: 2,
  borderRadius: 10,
  color: "#fff",
  backgroundColor: "#5c59ff",
  fontSize: 20,
  fontWeight: 600,
  padding: 10,
  margin: 10,
};

const button_settings = [
  {
    name: "border",
    type: "number",
  },
  {
    name: "borderRadius",
    type: "number",
  },
  {
    name: "color",
    type: "text",
  },
  {
    name: "backgroundColor",
    type: "text",
  },
  {
    name: "fontSize",
    type: "number",
  },
  {
    name: "fontWeight",
    type: "number",
  },
  {
    name: "padding",
    type: "number",
  },
  {
    name: "margin",
    type: "number",
  },
];

type AlignItems = "center" | "flex-start" | "flex-end";
type Direction = "row" | "column";

type StackSettings = {
  align_items: AlignItems;
  direction: Direction;
  justify_content: AlignItems;
};
const container_styles = {
  border: "1px solid #3b3b3b",
  minHeight: "80vh",
  borderRadius: 4,
  p: 3,
};
const Builder = () => {
  const [ButtonStyles, setButtonStyles] = useState<ButtonProps>(init);

  const [StackSettings, setStackSettings] = useState<StackSettings>({
    align_items: "flex-start",
    justify_content: "flex-start",
    direction: "row",
  });
  const stack_options = {
    vertical: [
      { value: "flex-start", ActiveIcon: AlignVerticalTop, InactiveIcon: AlignVerticalTopOutlined },
      {
        value: "center",
        ActiveIcon: AlignVerticalCenter,
        InactiveIcon: AlignVerticalCenterOutlined,
      },
      {
        value: "flex-end",
        ActiveIcon: AlignVerticalBottom,
        InactiveIcon: AlignVerticalBottomOutlined,
      },
    ],
    horizontal: [
      {
        value: "flex-start",
        ActiveIcon: AlignHorizontalLeft,
        InactiveIcon: AlignHorizontalLeftOutlined,
      },
      {
        value: "center",
        ActiveIcon: AlignHorizontalCenter,
        InactiveIcon: AlignHorizontalCenterOutlined,
      },
      {
        value: "flex-end",
        ActiveIcon: AlignHorizontalRight,
        InactiveIcon: AlignHorizontalRightOutlined,
      },
    ],
    direction: [
      {
        value: "row",
        ActiveIcon: ViewColumn,
        InactiveIcon: ViewColumnOutlined,
      },
      {
        value: "column",
        ActiveIcon: TableRows,
        InactiveIcon: TableRowsOutlined,
      },
    ],
  };

  type AlignOption = {
    value: string;
    ActiveIcon: any;
    InactiveIcon: any;
  };

  const SettingsIcons = ({
    Item,
    value,
    onClick,
  }: {
    Item: AlignOption;
    value: string;
    onClick: (value: string) => void;
  }) => {
    return (
      <IconButton
        onClick={() => onClick(Item.value)}
        color={value === Item.value ? "primary" : "default"}
      >
        <Item.ActiveIcon />
      </IconButton>
    );
  };

  const stack_code = `
  <Stack
  direction="${StackSettings.direction}"
  alignItems="${StackSettings.align_items}"
  justifyContent="${StackSettings.justify_content}"
  ></Stack>
  `;

  function CopyStack() {
    navigator.clipboard.writeText(stack_code);
  }
  return (
    <Box>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          <Grid item md={6}>
            <Grid sx={container_styles}>
              <Stack spacing={2}>
                <Stack>
                  <Typography>Direction</Typography>
                  <Stack direction="row">
                    {stack_options.direction.map((Item, index) => {
                      return (
                        <SettingsIcons
                          onClick={(v) =>
                            setStackSettings((prevSettings) => ({
                              ...prevSettings,
                              direction: v as Direction,
                            }))
                          }
                          key={index}
                          Item={Item}
                          value={StackSettings.direction}
                        />
                      );
                    })}
                  </Stack>
                </Stack>
                <Stack>
                  <Typography>Row Alignment</Typography>
                  <Stack direction="row">
                    {stack_options.vertical.map((Item, index) => {
                      return (
                        <SettingsIcons
                          onClick={(v) =>
                            setStackSettings((prevSettings) => ({
                              ...prevSettings,
                              justify_content: v as AlignItems,
                            }))
                          }
                          key={index}
                          Item={Item}
                          value={StackSettings.justify_content}
                        />
                      );
                    })}
                  </Stack>
                </Stack>
                <Stack>
                  <Typography>Row Alignment</Typography>
                  <Stack direction="row">
                    {stack_options.horizontal.map((Item, index) => {
                      return (
                        <SettingsIcons
                          onClick={(v) =>
                            setStackSettings((prevSettings) => ({
                              ...prevSettings,
                              align_items: v as AlignItems,
                            }))
                          }
                          key={index}
                          Item={Item}
                          value={StackSettings.align_items}
                        />
                      );
                    })}
                  </Stack>
                </Stack>
                <Stack spacing={2}>
                  <Typography>Button Settings</Typography>
                  <Stack spacing={2}>
                    {button_settings.map((button) => (
                      <TextField
                        size="small"
                        label={button.name}
                        type={button.type}
                        name={button.name}
                        placeholder={button.name}
                        value={ButtonStyles[button.name]}
                        onChange={(e) =>
                          setButtonStyles((prevButtonStyles) => ({
                            ...prevButtonStyles,
                            [button.name]: e.target.value,
                          }))
                        }
                      />
                    ))}
                  </Stack>
                </Stack>
              </Stack>
            </Grid>
          </Grid>
          <Grid item md={6}>
            <Grid sx={container_styles}>
              <Grid sx={{ background: "#160033" }} p={2}>
                <IconButton onClick={CopyStack}>
                  \
                  <CopyAll sx={{ color: "#fff" }} />{" "}
                </IconButton>
                <Typography color="#fff">{stack_code}</Typography>
              </Grid>
              <Stack
                direction={StackSettings.direction}
                alignItems={StackSettings.align_items}
                justifyContent={StackSettings.justify_content}
              >
                <DynamicButton style={ButtonStyles} />
                <DynamicButton style={ButtonStyles} />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Builder;
