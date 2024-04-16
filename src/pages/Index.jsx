import { Box, Button, Container, Heading, Input, Textarea, VStack, useToast, Image } from "@chakra-ui/react";
import { FaCode, FaCopy, FaPlay } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleGenerateCode = () => {
    toast({
      title: "Code generation in progress...",
      description: "We are generating your code, please wait.",
      status: "info",
      duration: 3000,
      isClosable: true,
    });
    // Simulate code generation
    setTimeout(() => {
      toast({
        title: "Code generated successfully!",
        description: "Your code is ready to use.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }, 3000);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText("Generated code snippet here...");
    toast({
      title: "Code copied to clipboard!",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={8}>
        <Image src="https://placehold.co/600x400" boxSize="150px" borderRadius="full" alt="Code Concept" />
        <Heading as="h1" size="xl">
          Code Generator
        </Heading>
        <Box w="full">
          <Input placeholder="Enter your code description here..." mb={4} />
          <Textarea placeholder="Enter additional details here..." mb={4} />
          <Button leftIcon={<FaPlay />} colorScheme="teal" onClick={handleGenerateCode}>
            Generate Code
          </Button>
        </Box>
        <Button leftIcon={<FaCopy />} colorScheme="blue" onClick={handleCopyCode}>
          Copy Code
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
