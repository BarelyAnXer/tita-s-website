
import React from "react";
import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
  message: string;
  senderEmail: string;
  subject: string;
  phone: string;
};

export default function ContactFormEmail({
  message,
  senderEmail,
  subject,
  phone
}: ContactFormEmailProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from your site</Preview>
      <Tailwind>
        <Body className="bg-gray-100 text-black">
          <Container>
            <Section className="bg-white borderBlack my-10 px-10 py-4 rounded-md">
              <Heading className="leading-tight">Subject: {subject}</Heading>
              <Text>Message: {message}</Text>
              <Hr />
              <Text>From: {senderEmail}</Text>
              <Text>Phone: {phone}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
}
