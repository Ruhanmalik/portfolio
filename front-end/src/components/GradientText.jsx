import "./../CSS/GradientText.css";

export default function GradientText({
  children,
  className = "",
  colors = ["#00ffc8", "#00b4ff", "#00ffc8", "#00b4ff", "#00ffc8"],
  animationSpeed = 8,
  showBorder = false,
  style = {}
}) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
    animationDuration: `${animationSpeed}s`,
  };

  return (
    <div className={`animated-gradient-text ${className}`}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={{...gradientStyle, ...style}}>{children}</div>
    </div>
  );
}
