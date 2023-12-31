// Import necessary Chakra UI components and types
import {
  Box,
  Flex,
  Heading,
  Link,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import Tags from "./tags";

// Define the type for an individual timeline event
export interface TimelineEvent {
  date: {
    start: string;
    end?: string;
    current?: boolean;
  };
  company: {
    name: string;
    url?: string;
  };
  title: string;
  description?: string;
  role?: string[];
  technologies?: string[];
  accomplishments?: string[];
}

interface IDescriptionListProps {
  title: string;
  items: string[];
}

const DescriptionList = ({ title, items }: IDescriptionListProps) => {
  return (
    <Stack spacing={4}>
      <Heading fontWeight="bold" fontSize={"xl"}>
        {title}
      </Heading>
      <UnorderedList>
        {items.map((item, index) => (
          <ListItem key={index}>{item}</ListItem>
        ))}
      </UnorderedList>
    </Stack>
  );
};

// Props type for the TimelineItem component
interface TimelineItemProps {
  event: TimelineEvent;
  borderColor?: string;
}

// TimelineItem component
const TimelineItem: React.FC<TimelineItemProps> = ({ event, borderColor }) => {
  return (
    <ListItem mb={2} position="relative" pl={8}>
      <Flex align="center">
        {/* Connector line */}
        <Box
          position="absolute"
          left="5px"
          transform="translateX(-50%)"
          w="1px"
          top={4}
          bottom={0}
          bg={borderColor || "teal.500"}
        />
        {/* Bullet */}
        <Box
          w="10px"
          h="10px"
          position="absolute"
          left={0}
          top={0}
          borderRadius="50%"
          bg={borderColor || "teal.500"}
          mr={4}
        />

        {/* Content */}
        <Stack
          p={4}
          boxShadow={"lg"}
          borderRadius="md"
          borderColor={borderColor || "teal.500"}
          w="100%"
          spacing={4}
        >
          {/* start title and date */}
          <Stack>
            <Heading fontSize="2xl">{event.title}</Heading>
            <Stack direction="row">
              <Link as={NextLink} href={event.company.url} isExternal>
                {event.company.name}
              </Link>
              <Text color="gray.50">|</Text>
              <Text fontWeight="bold" mb={2}>
                {event.date.start}
                {event.date.end
                  ? ` - ${event.date.end}`
                  : event.date.current
                  ? ` - Present`
                  : ""}
              </Text>
            </Stack>
          </Stack>
          {/* end title and date */}

          {/* start role */}
          {event.role && <DescriptionList title="Role" items={event.role} />}
          {/* end role */}

          {/* start accomplishments */}
          {event.accomplishments && (
            <DescriptionList
              title="Accomplishments"
              items={event.accomplishments}
            />
          )}
          {/* end accomplishments */}

          {/* start technologies */}
          {event.technologies && (
            <Stack spacing={4}>
              <Heading fontSize="xl">Technologies</Heading>
              <Tags
                items={
                  event.technologies?.map((tech) => ({
                    title: tech,
                    url: `/posts/tag/${tech}`,
                  })) || []
                }
              />
            </Stack>
          )}
          {/* end technologies */}
        </Stack>
      </Flex>
    </ListItem>
  );
};

// Props type for the Timeline component
interface TimelineProps {
  events: TimelineEvent[];
  borderColor?: string;
}

// Timeline component
const Timeline: React.FC<TimelineProps> = ({ events, borderColor }) => {
  return (
    <List styleType="none" p={0} m={0}>
      {events.map((event, index) => (
        <TimelineItem key={index} event={event} borderColor={borderColor} />
      ))}
    </List>
  );
};

export default Timeline;
