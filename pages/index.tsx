import type { NextPage } from "next";

import { Layout } from "@/components/Layout";
import { Card } from "@/components/Card";

import { ContentBox } from "@/components/ContentBox";
import { Title } from "@/components/Title";
import { Paragraphe } from "@/components/Paragraphe";
import { PaymentButton } from "@/components/PaymentButton";
import { PlanBox } from "@/components/PlanBox";
import { CanceltButton } from "@/components/CancelButton";

const Home: NextPage = () => {
  return (
    <Layout>
      <Card image="/images/illustration-hero.png" alt="Herro Illustration">
        <ContentBox>
          <Title title="Order Summary" />
          <Paragraphe content="You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!" />
          <PlanBox content="Annual Plan" price="$59.99/year" />
          <PaymentButton content="Proceed to Payment" />
          <CanceltButton content="Cancel Order" />
        </ContentBox>
      </Card>
    </Layout>
  );
};

export default Home;
