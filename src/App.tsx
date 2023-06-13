import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import GlobalStyles from "./styles/global";
import GSAPPlugins from "./components/GSAPPlugins";
import Navbar from "./templates/Navbar";
import Header from "./templates/Header";
import Audio from "./components/Audio";
import Intro from "./templates/Intro";
import About from "./templates/About";

function App() {
  return (
    <div>
       <ThemeProvider theme={theme}> 
        <GlobalStyles/>
        <GSAPPlugins/>

        <Audio/>
        <Navbar/>
        <Header/>
        <Intro/>
        <About/>
      </ThemeProvider>
    </div>
  );
}

export default App;
