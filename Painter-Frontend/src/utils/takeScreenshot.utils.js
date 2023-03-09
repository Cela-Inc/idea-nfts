import html2canvas from "html2canvas";

export const takeScreenshot = async () => {
  return await html2canvas(document.querySelector("#threeCanvas"));
};
