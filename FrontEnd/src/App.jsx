import Header1 from "./componants/header/Header1";
import { ColorModeContext, useMode } from "./theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Header2 from "./componants/header/Header2";
// @ts-ignore
import Header3 from "./componants/header/Header3";
import Hero from "./componants/hero/Hero";
import Heroicon from "./componants/hero/Heroicon";
import Main from "./componants/main/Main";
import Footer from "./componants/footer/Footer";
import Scrolltotop from "./componants/scrol/Scrolltotop";

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider
      // @ts-ignore
      value={colorMode}
    >
      <ThemeProvider
        // @ts-ignore
        theme={theme}
      >
        <CssBaseline />

        <Header1 />
        <Header2 />

        <Header3 />

        <Box bgcolor={theme.palette.bg.main}>
          <Hero />
          <Main />
          
        </Box>

        <Footer />
        <Scrolltotop />
        
      
       
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
