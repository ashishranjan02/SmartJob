import React, { useEffect, useRef, useState } from "react";
import { Box, Typography, IconButton, Card, CardContent, Avatar } from "@mui/material";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

const companies = [
  { name: "MAGIC_BRICKS", count: 90, domain: "magicbricks.com" },
  { name: "PAYTM", count: 234, domain: "paytm.com" },
  { name: "TL+KAN+BIOSYS", count: 21, domain: "tlkanbiosys.com" }, // placeholder domain
  { name: "TONETAG", count: 109, domain: "tonetag.com" },
  { name: "GOODYEAR", count: 70, domain: "goodyear.com" },
  { name: "LOANADDA", count: 45, domain: "loanadda.com" },
  { name: "FLIPKART", count: 320, domain: "flipkart.com" },
  { name: "AMAZON", count: 410, domain: "amazon.com" },
  { name: "TCS", count: 510, domain: "tcs.com" },
  { name: "INFOSYS", count: 295, domain: "infosys.com" },
  { name: "WIPRO", count: 275, domain: "wipro.com" },
  { name: "ACCENTURE", count: 330, domain: "accenture.com" },
];

const TopCompaniesCarousel = () => {
  const scrollRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const handleScroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  // ✅ Auto scroll
  useEffect(() => {
    if (paused) return;

    const interval = setInterval(() => {
      if (scrollRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 5) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          handleScroll("right");
        }
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [paused]);

  return (
    <Box sx={{ my: 3, position: "relative" }}>
      <Typography
  variant="h6"
  fontWeight="bold"
  sx={{
    mb: 2,
    fontSize: { xs: "1rem", sm: "1.25rem" },
    textAlign: "center", // ✅ Center aligned
  }}
>
  TOP COMPANIES HIRING NOW
</Typography>


      <Box
        sx={{ display: "flex", alignItems: "center", position: "relative" }}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left Arrow */}
        <IconButton
          onClick={() => handleScroll("left")}
          sx={{
            position: "absolute",
            left: 0,
            zIndex: 2,
            background: "#fff",
            "&:hover": { background: "#f1f1f1" },
          }}
        >
          <ArrowBackIos fontSize="small" />
        </IconButton>

        {/* Scrollable Container */}
        <Box
          ref={scrollRef}
          sx={{
            display: "flex",
            gap: 2,
            overflowX: "auto",
            scrollBehavior: "smooth",
            "&::-webkit-scrollbar": { display: "none" },
            flexGrow: 1,
            px: 6,
          }}
        >
          {companies.map((company, index) => (
            <Card
              key={index}
              sx={{
                minWidth: { xs: 140, sm: 180, md: 220 },
                p: 2,
                flexShrink: 0,
                cursor: "pointer",
                borderRadius: 2,
                boxShadow: 3,
                textAlign: "center",
                transition: "transform 0.3s",
                background: "linear-gradient(135deg, #e3f2fd, #bbdefb)",
                "&:hover": {
                  transform: "scale(1.05)",
                  boxShadow: 6,
                  background: "linear-gradient(135deg, #bbdefb, #90caf9)",
                },
              }}
            >
              <CardContent>
                {/* ✅ Company Logo from Clearbit */}
                <Avatar
                  src={`https://logo.clearbit.com/${company.domain}`}
                  alt={company.name}
                  sx={{
                    width: 48,
                    height: 48,
                    mx: "auto",
                    mb: 1,
                    bgcolor: "white",
                  }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://img.icons8.com/color/48/company.png"; // fallback
                  }}
                />
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  sx={{ fontSize: { xs: "0.8rem", sm: "1rem" } }}
                >
                  {company.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    color: "primary.main",
                    fontWeight: 500,
                    fontSize: { xs: "0.7rem", sm: "0.85rem" },
                  }}
                >
                  {company.count} COMPANIES
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        {/* Right Arrow */}
        <IconButton
          onClick={() => handleScroll("right")}
          sx={{
            position: "absolute",
            right: 0,
            zIndex: 2,
            background: "#fff",
            "&:hover": { background: "#f1f1f1" },
          }}
        >
          <ArrowForwardIos fontSize="small" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopCompaniesCarousel;
