import * as React from 'react';
import { Tabs as BaseTabs } from '@base-ui/react/tabs';

export const Tabs = React.forwardRef<
  React.ComponentRef<typeof BaseTabs.Root>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Root>
>(({ className = '', ...props }, ref) => (
  <BaseTabs.Root
    ref={ref}
    className={`tabs-root ${className}`}
    {...props}
  />
));
Tabs.displayName = 'Tabs';

export interface TabsListProps
  extends React.ComponentPropsWithoutRef<typeof BaseTabs.List> {
  variant?: 'default' | 'line';
}

export const TabsList = React.forwardRef<
  React.ComponentRef<typeof BaseTabs.List>,
  TabsListProps
>(({ className = '', variant = 'default', ...props }, ref) => (
  <BaseTabs.List
    ref={ref}
    data-variant={variant}
    className={`tabs-list ${variant === 'line' ? 'tabs-list-line' : 'tabs-list-default'} ${className}`}
    {...props}
  />
));
TabsList.displayName = 'TabsList';

export const TabsIndicator = React.forwardRef<
  React.ComponentRef<typeof BaseTabs.Indicator>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Indicator>
>(({ className = '', ...props }, ref) => (
  <BaseTabs.Indicator
    ref={ref}
    className={`tabs-indicator ${className}`}
    {...props}
  />
));
TabsIndicator.displayName = 'TabsIndicator';

export const TabsTrigger = React.forwardRef<
  React.ComponentRef<typeof BaseTabs.Tab>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Tab>
>(({ className = '', ...props }, ref) => (
  <BaseTabs.Tab
    ref={ref}
    className={`tabs-trigger ${className}`}
    {...props}
  />
));
TabsTrigger.displayName = 'TabsTrigger';

export const TabsContent = React.forwardRef<
  React.ComponentRef<typeof BaseTabs.Panel>,
  React.ComponentPropsWithoutRef<typeof BaseTabs.Panel>
>(({ className = '', ...props }, ref) => (
  <BaseTabs.Panel
    ref={ref}
    className={`tabs-content ${className}`}
    {...props}
  />
));
TabsContent.displayName = 'TabsContent';
