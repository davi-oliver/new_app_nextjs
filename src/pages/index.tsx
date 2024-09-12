import { styled } from "@stitches/react";


const Buttom2 = styled("button", {
  backgroundColor: "$green500",
  color: "white",
  padding: "10px 20px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: "blue",
  },
});

export default function Home() {
  return (
    <Buttom2> Enviar </Buttom2>

  );
}
