import './index.scss'
import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'

function Logo() {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const fillLogoRef = useRef() // Ref for the filled paths
  // gsap.config({trialWarn: false});

  /* No lines animation */
  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin)

  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from( outlineLogoRef.current, {
  //       drawSVG: 0,
  //       duration: 3,
  //     });
  // }, []);

  /* Animating path strokes */
  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin);

  //   // Select all path elements within the outlineLogoRef
  //   const paths = outlineLogoRef.current.querySelectorAll('path');

  //   // Create an animation for each path and add it to a timeline
  //   const tl = gsap.timeline();
  //   paths.forEach((path, index) => {
  //     tl.from(path, {
  //       duration: 2,
  //       drawSVG: 0,
  //       ease: 'power1.out',
  //       stagger: 1, // Set a stagger of 0 to animate them simultaneously
  //     }).to(path, {
  //       duration: 2,
  //       drawSVG: '100%',
  //       ease: 'power1.out',
  //     });
  //   });

  //   // paths.forEach((path, index) => {
  //   //   tl.to(path, {
  //   //     duration: 1.5,
  //   //     drawSVG: '100%',
  //   //     ease: 'power1.out',
  //   //   });
  //   // });

  //   // Animate the background
  //   // tl.to(bgRef.current, {
  //   //   duration: 1,
  //   //   opacity: 1,
  //   // }, 0);

  // }, []);

  /* Animating path stroke and fill */
  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    // Select all path elements within the outlineLogoRef
    const paths = outlineLogoRef.current.querySelectorAll('path')
    const filledPaths = fillLogoRef.current.querySelectorAll('path')

    // Create an animation for each path and add it to a timeline
    const tlOutline = gsap.timeline()
    paths.forEach((path, index) => {
      tlOutline
        .from(path, {
          duration: 1.5,
          drawSVG: 0,
          ease: 'power1.out',
          stagger: 0, // Set a stagger of 0 to animate them simultaneously
        })
        .to(path, {
          duration: 1.5,
          drawSVG: '100%',
          ease: 'power1.out',
          stagger: 0,
        })
    })

    // Create a separate timeline for filling the paths
    const tlFill = gsap.timeline()
    filledPaths.forEach((path) => {
      tlFill.fromTo(
        path,
        {
          fill: 'transparent', // Start with transparent fill
        },
        {
          duration: 1.5,
          fill: '#ffd700', 
        }
      )
    })

    // Combine both timelines
    const mainTimeline = gsap.timeline()
    mainTimeline.add(tlOutline, 0)
    mainTimeline.add(tlFill, 12) // Start filling after 15 seconds (adjust as needed)
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="305.000000pt"
        height="222.000000pt"
        viewBox="0 0 305.000000 222.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          ref={fillLogoRef}
          transform="translate(0.000000,222.000000) scale(0.100000,-0.100000)"
          fill="none"
          stroke="none"
        >
          <g ref={outlineLogoRef}>
            <path
              d="M1464 2163 c-234 -365 -297 -487 -323 -626 -21 -115 19 -195 142
          -283 123 -89 207 -175 207 -214 0 -14 -32 -12 -115 5 -158 33 -282 131 -305
          240 -6 30 -15 53 -20 50 -23 -14 -43 -97 -38 -162 7 -89 40 -155 113 -221 209
          -191 583 -189 782 6 73 72 104 140 104 229 0 69 -19 144 -38 150 -5 2 -15 -21
          -22 -50 -6 -30 -25 -72 -42 -95 -57 -78 -183 -142 -311 -157 -67 -8 -70 -3
          -34 53 24 39 69 79 186 166 36 27 81 69 100 94 32 41 35 53 38 122 7 133 -50
          266 -248 577 -58 93 -113 169 -122 171 -11 2 -29 -16 -54 -55z m122 -106 c74
          -120 122 -219 130 -273 10 -68 -10 -107 -102 -201 -46 -47 -84 -90 -84 -94 0
          -21 -23 -4 -96 72 -110 112 -126 140 -121 211 4 63 51 169 130 289 54 85 67
          100 78 94 4 -3 34 -47 65 -98z m215 -335 c50 -113 26 -188 -90 -291 -38 -34
          -74 -61 -79 -61 -6 0 -16 9 -22 20 -6 11 -24 27 -40 35 -17 9 -30 22 -30 31 0
          8 38 54 84 102 94 98 116 134 116 190 0 71 23 61 61 -26z m-521 36 c1 -54 34
          -109 110 -183 39 -38 79 -83 87 -100 15 -27 14 -30 -3 -40 -10 -5 -31 -22 -47
          -37 -16 -16 -32 -28 -36 -28 -14 0 -155 148 -172 181 -27 50 -23 99 12 174 17
          36 35 65 40 65 5 0 9 -15 9 -32z m585 -267 c0 -72 -3 -83 -30 -123 -17 -23
          -70 -73 -119 -109 -101 -77 -151 -123 -174 -161 -9 -16 -19 -28 -22 -28 -4 0
          -26 24 -49 52 -23 29 -89 87 -147 130 -135 101 -159 137 -159 234 0 100 12
          108 60 39 21 -31 66 -82 100 -113 49 -45 64 -65 69 -96 14 -74 52 -106 127
          -106 54 0 109 51 109 101 0 28 11 43 76 102 42 39 89 94 106 124 39 70 52 58
          53 -46z m-289 -103 c29 -26 35 -65 19 -105 -26 -61 -97 -72 -146 -24 -35 36
          -38 77 -8 115 39 50 92 55 135 14z m-510 -170 c4 -13 34 -49 66 -80 l60 -57
          -39 -36 c-21 -19 -41 -35 -45 -35 -25 0 -78 125 -78 184 0 49 23 64 36 24z
          m924 -22 c0 -51 -24 -132 -49 -165 l-18 -24 -42 38 -42 38 49 51 c27 28 56 63
          65 79 25 39 37 33 37 -17z m-724 -142 c33 -14 61 -27 62 -29 5 -4 -39 -127
          -49 -139 -9 -10 -78 29 -129 72 l-35 30 45 46 c24 25 45 46 46 46 1 0 28 -12
          60 -26z m609 -14 l39 -40 -25 -26 c-27 -31 -107 -84 -125 -84 -11 0 -54 99
          -54 126 0 13 88 61 115 63 6 1 28 -17 50 -39z m-157 -83 c12 -33 22 -64 22
          -71 0 -14 -81 -41 -154 -51 -36 -5 -51 -3 -57 7 -13 20 -11 142 3 156 7 7 30
          13 53 13 22 1 54 5 70 8 17 4 33 5 36 2 3 -3 15 -32 27 -64z m-220 48 c8 -3
          12 -30 12 -90 0 -75 -2 -85 -18 -85 -27 0 -132 19 -170 31 -36 12 -36 9 0 107
          l20 53 71 -6 c40 -4 78 -8 85 -10z"
            />

            <path
              d="M40 883 c0 -31 102 -117 195 -165 90 -46 216 -90 480 -168 181 -53
            260 -82 369 -138 142 -72 248 -185 281 -296 7 -22 18 -42 24 -44 19 -6 4 118
            -25 207 -68 206 -216 315 -514 379 -52 12 -183 33 -290 47 -107 14 -224 33
            -260 41 -97 22 -187 69 -218 115 -29 42 -42 48 -42 22z m531 -203 c370 -49
            530 -102 651 -218 34 -32 70 -80 88 -115 26 -53 38 -97 26 -97 -2 0 -31 27
            -64 59 -113 111 -241 172 -557 266 -270 80 -345 105 -345 116 0 13 29 11 201
            -11z"
            />
            <path
              d="M2929 863 c-49 -75 -152 -112 -413 -148 -373 -52 -482 -77 -611 -141
            -173 -85 -271 -231 -291 -433 -4 -49 -3 -71 5 -71 6 0 14 12 17 27 20 84 110
            201 202 265 99 69 255 131 521 208 291 84 386 122 496 195 53 35 125 107 125
            125 0 23 -28 8 -51 -27z m-289 -172 c0 -11 -77 -37 -356 -120 -304 -91 -442
            -158 -553 -269 -31 -31 -57 -50 -63 -44 -17 17 60 148 123 206 108 101 249
            155 510 195 262 41 339 48 339 32z"
            />
            <path
              d="M270 532 c0 -15 166 -215 236 -286 119 -119 235 -195 353 -230 90
            -27 291 -17 291 14 0 13 -5 12 -73 -1 -42 -9 -76 -9 -134 0 -146 21 -234 85
            -298 213 -31 63 -57 158 -44 158 24 -1 212 -39 216 -44 4 -4 -1 -20 -11 -37
            -25 -42 -24 -123 1 -157 45 -60 107 -84 180 -70 47 10 99 60 109 106 10 47 13
            52 29 52 16 0 87 -66 127 -120 14 -19 29 -32 33 -28 11 11 -30 71 -84 121 -96
            90 -219 134 -520 187 -200 35 -306 66 -357 105 -33 25 -54 32 -54 17z m202
            -104 l88 -21 21 -71 c12 -39 32 -92 45 -118 33 -66 14 -63 -66 9 -66 60 -190
            200 -190 215 0 11 2 11 102 -14z m522 -114 c73 -24 86 -35 86 -72 0 -71 -62
            -132 -135 -132 -120 0 -177 131 -97 223 18 21 40 18 146 -19z"
            />
            <path
              d="M916 274 c-26 -25 -20 -63 11 -70 50 -13 80 30 47 67 -21 23 -37 24
            -58 3z m44 -34 c0 -21 -24 -28 -35 -10 -8 14 3 30 21 30 8 0 14 -9 14 -20z"
            />
            <path
              d="M2684 514 c-49 -38 -154 -69 -354 -104 -291 -51 -411 -92 -511 -178
            -41 -36 -99 -107 -99 -124 0 -20 21 -4 56 43 21 28 56 65 78 81 l41 29 12 -47
            c22 -88 105 -142 191 -123 101 22 151 127 105 224 -9 19 -14 38 -10 41 8 9
            210 43 216 38 9 -8 -19 -99 -50 -163 -58 -118 -148 -181 -292 -202 -59 -9 -92
            -9 -138 0 -34 7 -64 10 -67 7 -31 -31 186 -48 283 -22 101 27 222 101 321 196
            93 90 274 304 274 324 0 13 -27 4 -56 -20z m-44 -72 c0 -15 -124 -155 -190
            -215 -72 -65 -100 -75 -75 -27 9 17 29 70 44 118 l29 87 78 21 c90 24 114 28
            114 16z m-471 -118 c67 -86 6 -214 -103 -214 -79 0 -140 63 -134 138 3 34 7
            38 53 55 54 21 133 45 152 46 6 1 21 -11 32 -25z"
            />
            <path
              d="M2037 272 c-30 -33 -15 -72 28 -72 42 0 59 44 29 74 -20 21 -37 20
            -57 -2z m46 -27 c7 -17 -8 -29 -28 -21 -17 6 -9 36 10 36 7 0 15 -7 18 -15z"
            />
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Logo
