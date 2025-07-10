import img1 from "../assets/foundation.png";
import img2 from "../assets/profile.jpg";
import img3 from "../assets/react.svg";

const Circle = () => {
  return (
    <div className="relative mx-auto mt-20 h-[512px] w-[512px] rounded-full bg-gradient-to-br from-purple-600 to-gray-900">
      {/* Outer Ring */}
      <div className="absolute top-0 left-0 h-full w-full rounded-full border border-white/10 animate-[spin_30s_linear_infinite]">
        {/* Image 1 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[30deg] transform">
          <img
            src={img3}
            className="h-12 w-12 translate-x-[240px] rounded-full border-2 border-white"
          />
        </div>
        {/* Image 2 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[210deg] transform">
          <img
            src={img2}
            className="h-12 w-12 translate-x-[240px] rounded-full border-2 border-white"
          />
        </div>
      </div>

      {/* Middle Ring */}
      <div className="absolute top-[12.5%] left-[12.5%] h-[75%] w-[75%] rounded-full border border-white/10 animate-[spin_30s_linear_infinite]">
        {/* Image 3 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[60deg] transform">
          <img
            src={img1}
            className="h-12 w-12 translate-x-[180px] rounded-full border-2 border-white"
          />
        </div>
        {/* Image 4 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[240deg] transform">
          <img
            src={img2}
            className="h-12 w-12 translate-x-[180px] rounded-full border-2 border-white"
          />
        </div>
      </div>

      {/* Inner Ring */}
      <div className="absolute top-[25%] left-[25%] h-[50%] w-[50%] rounded-full border border-white/10 animate-[spin_30s_linear_infinite]">
        {/* Image 5 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[90deg] transform">
          <img
            src={img1}
            className="h-12 w-12 translate-x-[120px] rounded-full border-2 border-white"
          />
        </div>
        {/* Image 6 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[270deg] transform">
          <img
            src={img3}
            className="h-12 w-12 translate-x-[120px] rounded-full border-2 border-white"
          />
        </div>
      </div>

      {/* Center Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center text-white">
        <div className="text-3xl font-bold">Saubhagya</div>
      </div>
    </div>
  );
};

export default Circle;
