import * as React from "react";
import Svg, { Path } from "react-native-svg";

export function Heart(props) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.size}
      height={props.size}
      stroke={props.color}
      fill="none"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="prefix__feather prefix__feather-heart"
      {...props}
    >
      <Path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    </Svg>
  )
}

// export function Home(props) {
//     return (
//       <Svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 24 24"
//         width={props.size}
//         height={props.size}
//         stroke={props.color}
//         {...props}
//       >
//         <Path d="M12 2a1 1 0 00-.71.297l-10.087 8.8A.5.5 0 001 11.5a.5.5 0 00.5.5H4v8a1 1 0 001 1h4a1 1 0 001-1v-6h4v6a1 1 0 001 1h4a1 1 0 001-1v-8h2.5a.5.5 0 00.5-.5.5.5 0 00-.203-.402l-10.08-8.795a1 1 0 00-.006-.006A1 1 0 0012 2z" />
//       </Svg>
//     )
// }

export function Home(props) {
  return (
    <Svg xmlns="http://www.w3.org/2000/svg" stroke={props.color}  width={props.size} height={props.size} {...props}>
      <Path d="M12 2a1 1 0 00-.71.297l-10.087 8.8A.5.5 0 001 11.5a.5.5 0 00.5.5H4v8a1 1 0 001 1h4a1 1 0 001-1v-6h4v6a1 1 0 001 1h4a1 1 0 001-1v-8h2.5a.5.5 0 00.5-.5.5.5 0 00-.203-.402l-10.08-8.795a1 1 0 00-.006-.006A1 1 0 0012 2z" />
    </Svg>
  )
}

export function Reels(props) {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width={props.size}
        height={props.size}
        stroke={props.color}
        {...props}
      >
        <Path d="M15 4C8.937 4 4 8.937 4 15v20c0 6.063 4.937 11 11 11h20c6.063 0 11-4.937 11-11V15c0-6.063-4.937-11-11-11H15zm1.74 2h10.686l5.834 10H22.574L16.74 6zm13 0H35c4.983 0 9 4.017 9 9v1h-8.426L29.74 6zm-15.254.104L20.26 16H6v-1c0-4.8 3.758-8.617 8.486-8.896zM6 18h38v17c0 4.983-4.017 9-9 9H15c-4.983 0-9-4.017-9-9V18zm15.979 5.014C20.435 23.05 19 24.269 19 25.957v9.084c0 2.25 2.552 3.672 4.51 2.557l7.988-4.541c1.945-1.105 1.945-4.013 0-5.118L23.51 23.4h-.002a2.938 2.938 0 00-1.53-.385zm.003 1.972c.177.002.36.05.54.15l7.99 4.542c.709.403.709 1.237 0 1.64L22.52 35.86c-.717.409-1.52-.05-1.52-.818v-9.084a.95.95 0 01.492-.85.994.994 0 01.49-.12z" />
      </Svg>
    )
}
  
export function Search(props) {
    return (
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 30 30"
        width={props.size}
        height={props.size}
        stroke={props.color}
        {...props}
      >
        <Path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.947 9.947 0 006.322-2.264l5.971 5.971a1 1 0 101.414-1.414l-5.97-5.97A9.947 9.947 0 0023 13c0-5.511-4.489-10-10-10zm0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8z" />
      </Svg>
    )
}