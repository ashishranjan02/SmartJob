import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { motion } from "framer-motion"; 
// ✅ import logos
import Paytm from "../../../assets/companies/Paytm.png";
import Swiggy from "../../../assets/companies/swiggy.png";
import TechCloak from "../../../assets/companies/TechCloak.png";
import TCS from "../../../assets/companies/tcs.png";
import ToneTang from "../../../assets/companies/ToneTag.png";
import LoanAdda from "../../../assets/companies/loanadda.png";
import MagicBricks from "../../../assets/companies/Magic_Bricks.png";
import GoodYear from "../../../assets/companies/goodyear.png";
import Wipro from "../../../assets/companies/Wipro.png";
import Scania from "../../../assets/companies/scania.png";
import KanBiosys from "../../../assets/companies/KanBiosys.png";
import Cognizant from "../../../assets/companies/Cognizant.png";

const companies = [
  { name: "Paytm", logo: Paytm, url: "/company/paytm" },
  { name: "Swiggy", logo: Swiggy, url: "/company/swiggy" },
  { name: "TechCloak", logo: TechCloak, url: "/company/techcloak" },
  { name: "TCS", logo: TCS, url: "/company/tcs" },
  { name: "ToneTang", logo: ToneTang, url: "/company/tonetang" },
  { name: "LoanAdda", logo: LoanAdda, url: "/company/loanadda" },
  { name: "MagicBricks", logo: MagicBricks, url: "/company/magicbricks" },
  { name: "GoodYear", logo: GoodYear, url: "/company/goodyear" },
  { name: "Wipro", logo: Wipro, url: "/company/wipro" },
  { name: "Scania", logo: Scania, url: "/company/scania" },
  { name: "KanBiosys", logo: KanBiosys, url: "/company/kanbiosys" },
  { name: "Cognizant", logo: Cognizant, url: "/company/cognizant" },
];

export default function FeaturedCompaniesGrid() {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <Box sx={{ width: "95%", mx: "auto", my: 6, overflow: "hidden" }}>
      <Typography variant="h5" textAlign="center" mb={4} fontWeight={600}>
        Featured Companies
      </Typography>

      {/* Motion container for infinite loop */}
      <motion.div
        style={{ display: "flex", gap: "2.5rem" }}
        animate={{ x: ["0%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: 20, // slower for larger cards
          ease: "linear",
        }}
      >
        {/* Duplicate logos twice for smooth infinite scroll */}
        {[...companies, ...companies].map((company, index) => (
          <IconButton
            key={index}
            onClick={() => handleRedirect(company.url)}
            sx={{
              bgcolor: "white",
              borderRadius: 3,
              width: 220,   // ⬆️ Bigger width
              height: 120,  // ⬆️ Bigger height
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexShrink: 0,
              boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
            }}
          >
            <img
              src={company.logo}
              alt={company.name}
              style={{
                maxHeight: "70px",  // ⬆️ Bigger logo size
                maxWidth: "160px",
                objectFit: "contain",
              }}
            />
          </IconButton>
        ))}
      </motion.div>
    </Box>
  );
}
