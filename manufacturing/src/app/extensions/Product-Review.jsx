import React from "react";
import { Text, Flex, Accordion, Image, hubspot } from "@hubspot/ui-extensions";

import { CrmPropertyList } from "@hubspot/ui-extensions/crm";

hubspot.extend(({ context, runServerlessFunction, actions }) => (
  <Extension
    context={context}
    runServerless={runServerlessFunction}
    sendAlert={actions.addAlert}
  />
));

const Extension = () => {
  return (
    <>
      <Accordion title="Product Review" defaultOpen={true}>
        <Flex direction={"column"} justify={"start"} gap={"small"}>
          <Image
            alt="White chair with wooden arms"
            src="https://27132029.fs1.hubspotusercontent-eu1.net/hubfs/27132029/furniture_chair.png"
          />

          <Text>
            Bohemian-inspired chair: Crafted with meticulous attention to
            detail, this sofa features a captivating boho design that
            effortlessly enhances any living space.
          </Text>

          <Accordion title="Item details" defaultOpen={true}>
            <CrmPropertyList
              objectTypeId="2-131391613"
              objectId="6588512467"
              properties={[
                "sku",
                "length",
                "width",
                "height",
                "weight",
                "fabric",
                "wood",
                "warranty",
                "construction",
                "packing_weight",
                "hardware",
                "finish",
              ]}
              direction="row"
            />
          </Accordion>
        </Flex>
      </Accordion>
    </>
  );
};
