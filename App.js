import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { LinkStackNavigation } from "./src/navigations/LinkStackNavigation";
import { RootNavigation } from "./src/navigations/RootNavigation";
import { RecoilRoot } from "recoil";
import { RecoilCustomPersist } from "./src/components/RecoilCustomPersist";

export default function App() {
  return (
    <SafeAreaProvider>
      <RecoilRoot>
        <RecoilCustomPersist>
          <NavigationContainer>
            <RootNavigation />
          </NavigationContainer>
        </RecoilCustomPersist>
      </RecoilRoot>
    </SafeAreaProvider>
  );
}
