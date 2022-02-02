import { createElement, useState } from 'react';
import { NavigationTemplate } from './NavigationTemplate';

export function NavigationBehavior() {
  const [areSettingsOpen, setSettingsOpen] = useState<boolean>(false);
  return createElement(NavigationTemplate, {
    areSettingsOpen,
    setSettingsOpen,
  });
}
