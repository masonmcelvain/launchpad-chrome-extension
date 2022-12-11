import { useColorMode } from "@chakra-ui/react";
import * as React from "react";
import browser from "webextension-polyfill";
import { LinksProvider } from "../contexts/Links";
import { setStoredColorMode, StorageKey } from "../lib/webextension";
import Page from "./Page";

export default function App(): JSX.Element {
  const { colorMode, toggleColorMode } = useColorMode();

  // Initialize color theme from browser storage
  React.useEffect(() => {
    browser.storage.local.get(StorageKey.COLOR_MODE).then((result) => {
      const storedColorMode = result[StorageKey.COLOR_MODE];
      storedColorMode
        ? storedColorMode !== colorMode && toggleColorMode()
        : setStoredColorMode(colorMode);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <LinksProvider>
      <Page />
    </LinksProvider>
  );
}