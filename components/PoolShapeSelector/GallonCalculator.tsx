'use client';

import { Tabs } from '@mantine/core';

export function GallonCalculator() {
  return (
    <Tabs defaultValue="first">
      <Tabs.List grow>
        <Tabs.Tab value="first">First tab</Tabs.Tab>
        <Tabs.Tab value="second">Second tab</Tabs.Tab>
        <Tabs.Tab value="third">Third tab</Tabs.Tab>
      </Tabs.List>
    </Tabs>
  );
}
