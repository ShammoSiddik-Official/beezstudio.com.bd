import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Home from "@/pages/home";
import Projects from "@/pages/projects";
import Services from "@/pages/services";
import About from "@/pages/about";
import Contact from "@/pages/contact";

import IndustrialSteelBuildings from "@/pages/projects/industrial-steel-buildings";
import CommercialBuildings from "@/pages/projects/commercial-buildings";
import CampusMedical from "@/pages/projects/campus-medical";
import HospitalProjects from "@/pages/projects/hospital-projects";
import ReligiousProjects from "@/pages/projects/religious-projects";
import ApartmentBuildings from "@/pages/projects/apartment-buildings";
import ResidentialHotel from "@/pages/projects/residential-hotel";
import BungalowsCottages from "@/pages/projects/bungalows-cottages";
import InteriorsDesign from "@/pages/projects/interiors-design";
import LandscapeProjects from "@/pages/projects/landscape-projects";
import BridgeProjects from "@/pages/projects/bridge-projects";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/industrial-steel-buildings" component={IndustrialSteelBuildings} />
      <Route path="/projects/commercial-buildings" component={CommercialBuildings} />
      <Route path="/projects/campus-medical" component={CampusMedical} />
      <Route path="/projects/hospital-projects" component={HospitalProjects} />
      <Route path="/projects/religious-projects" component={ReligiousProjects} />
      <Route path="/projects/apartment-buildings" component={ApartmentBuildings} />
      <Route path="/projects/residential-hotel" component={ResidentialHotel} />
      <Route path="/projects/bungalows-cottages" component={BungalowsCottages} />
      <Route path="/projects/interiors-design" component={InteriorsDesign} />
      <Route path="/projects/landscape-projects" component={LandscapeProjects} />
      <Route path="/projects/bridge-projects" component={BridgeProjects} />
      <Route path="/services" component={Services} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="min-h-screen flex flex-col bg-background font-sans text-foreground selection:bg-primary selection:text-primary-foreground">
            <Navbar />
            <main className="flex-grow flex flex-col w-full">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
