import { Box } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import { TypeAnimation } from "react-type-animation";

const TerminalContainer = dynamic(
  import("@/components/atoms/terminalContainer"),
  {}
);

export default function HelloSection() {
  const sequence = [1000, "Hello, I'm a Software Engineer based in Jakarta:"];

  return (
    <Box fontSize={"sm"}>
      <TerminalContainer>
        <Box>
          <TypeAnimation
            sequence={sequence}
            speed={80}
            deletionSpeed={70}
            cursor={false}
            style={{
              fontFamily: "var(--chakra-fonts-mono)",
            }}
          />
        </Box>

        <TypeAnimation
          sequence={[
            2000,
            "I build app with Laravel",
            2000,
            "I build app with React",
            2000,
            "I build app with Vue",
            2000,
            "I build app with Flutter",
            2000,
            "I build app with ExpressJS",
            2000,
            "I build app with FastAPI",
          ]}
          speed={50}
          deletionSpeed={70}
          repeat={Infinity}
          cursor={true}
          style={{
            fontFamily: "var(--chakra-fonts-mono)",
          }}
        />
      </TerminalContainer>
    </Box>
  );
}
