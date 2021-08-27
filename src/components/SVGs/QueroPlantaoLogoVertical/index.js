import React from 'react'
import { SvgXml } from 'react-native-svg'

const xml = `
<svg width="741" height="747" viewBox="0 0 741 747" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M304.29 506.66C301.533 506.66 298.89 507.754 296.94 509.703C294.99 511.651 293.893 514.293 293.89 517.05V553.63C293.94 556.165 293.562 558.691 292.77 561.1C292.158 562.927 291.131 564.587 289.77 565.95C288.354 567.319 286.644 568.345 284.77 568.95C279.586 570.497 274.064 570.497 268.88 568.95C267.005 568.347 265.294 567.321 263.88 565.95C262.516 564.589 261.489 562.928 260.88 561.1C260.092 558.69 259.714 556.165 259.76 553.63V519.47C259.761 517.787 259.431 516.121 258.788 514.566C258.144 513.012 257.201 511.599 256.011 510.409C254.821 509.219 253.408 508.276 251.854 507.632C250.299 506.989 248.633 506.659 246.95 506.66V506.66C243.553 506.66 240.294 508.01 237.892 510.412C235.49 512.814 234.14 516.073 234.14 519.47V555.47C234.065 560.797 235.037 566.087 237 571.04C238.925 575.74 241.873 579.952 245.63 583.37C249.569 586.883 254.192 589.543 259.21 591.18C270.658 594.727 282.912 594.727 294.36 591.18C299.398 589.549 304.043 586.889 308 583.37C311.762 579.956 314.711 575.743 316.63 571.04C318.61 566.09 319.598 560.8 319.54 555.47V519.47C319.541 517.787 319.211 516.121 318.568 514.566C317.924 513.012 316.981 511.599 315.791 510.409C314.601 509.219 313.188 508.276 311.634 507.632C310.079 506.989 308.413 506.659 306.73 506.66H304.29Z" fill="#262941"/>
<path d="M355 567.27V563.69C355 563.051 355.254 562.438 355.706 561.986C356.158 561.534 356.771 561.28 357.41 561.28H389.08C392.117 561.28 395.029 560.074 397.176 557.926C399.324 555.779 400.53 552.867 400.53 549.83V549.83C400.53 546.793 399.324 543.881 397.176 541.734C395.029 539.586 392.117 538.38 389.08 538.38H357.44C357.119 538.384 356.801 538.324 356.504 538.203C356.207 538.083 355.937 537.904 355.709 537.678C355.482 537.451 355.302 537.182 355.18 536.885C355.059 536.589 354.997 536.271 355 535.95V533.26C355 532.621 355.254 532.008 355.706 531.556C356.158 531.104 356.771 530.85 357.41 530.85H394.72C397.757 530.85 400.669 529.644 402.816 527.496C404.964 525.349 406.17 522.437 406.17 519.4V518.57C406.17 515.533 404.964 512.621 402.816 510.474C400.669 508.326 397.757 507.12 394.72 507.12H341.93C338.609 507.12 335.425 508.439 333.077 510.787C330.729 513.135 329.41 516.32 329.41 519.64V580.81C329.409 582.455 329.732 584.083 330.36 585.603C330.989 587.122 331.911 588.503 333.074 589.666C334.237 590.829 335.618 591.751 337.137 592.38C338.657 593.008 340.285 593.331 341.93 593.33H395.77C398.795 593.33 401.696 592.133 403.842 590.001C405.987 587.869 407.202 584.975 407.22 581.95V581.18C407.22 578.143 406.014 575.231 403.866 573.084C401.719 570.936 398.807 569.73 395.77 569.73H357.44C357.117 569.734 356.796 569.673 356.497 569.551C356.198 569.428 355.926 569.247 355.698 569.017C355.471 568.788 355.292 568.515 355.172 568.215C355.052 567.914 354.993 567.593 355 567.27V567.27Z" fill="#262941"/>
<path d="M495.09 567.95C494.734 567.421 494.601 566.773 494.719 566.146C494.837 565.519 495.196 564.964 495.72 564.6C496.1 564.33 496.48 564.06 496.84 563.77C501.874 559.902 505.48 554.471 507.09 548.33C507.9 545.273 508.303 542.123 508.29 538.96C508.349 534.441 507.513 529.954 505.83 525.76C504.138 521.702 501.465 518.129 498.05 515.36C494.358 512.455 490.111 510.335 485.57 509.13C480.164 507.71 474.589 507.037 469 507.13H428.74C425.342 507.133 422.083 508.485 419.681 510.888C417.279 513.292 415.93 516.552 415.93 519.95V580.54C415.93 583.937 417.28 587.196 419.682 589.598C422.084 592 425.343 593.35 428.74 593.35V593.35C430.423 593.351 432.089 593.021 433.644 592.378C435.199 591.734 436.611 590.791 437.801 589.601C438.991 588.411 439.934 586.999 440.578 585.444C441.221 583.889 441.551 582.223 441.55 580.54V574.14C441.553 573.5 441.809 572.887 442.262 572.435C442.716 571.984 443.33 571.73 443.97 571.73H465.5C465.897 571.729 466.288 571.827 466.637 572.016C466.987 572.204 467.283 572.477 467.5 572.81L477.29 587.59C478.458 589.363 480.048 590.818 481.917 591.823C483.787 592.829 485.877 593.353 488 593.35H488.17C490.496 593.348 492.778 592.712 494.77 591.512C496.763 590.311 498.39 588.59 499.479 586.534C500.568 584.479 501.076 582.165 500.949 579.842C500.822 577.52 500.066 575.275 498.76 573.35L495.09 567.95ZM481.84 538.95C481.87 540.317 481.628 541.677 481.13 542.95C480.731 543.935 480.091 544.805 479.27 545.48C478.161 546.356 476.89 547.005 475.53 547.39C473.534 547.959 471.465 548.225 469.39 548.18H444C443.683 548.181 443.368 548.12 443.075 547.999C442.781 547.879 442.514 547.702 442.289 547.478C442.065 547.254 441.886 546.988 441.764 546.695C441.643 546.402 441.58 546.087 441.58 545.77V533.18C441.58 532.863 441.643 532.548 441.764 532.255C441.886 531.962 442.065 531.696 442.289 531.472C442.514 531.248 442.781 531.071 443.075 530.951C443.368 530.83 443.683 530.769 444 530.77H469.42C474.01 530.77 477.47 531.59 479.42 533.14C480.53 534.04 481.84 535.53 481.84 538.95V538.95Z" fill="#262941"/>
<path d="M607.44 532.19C605.096 526.857 601.643 522.084 597.31 518.19C592.806 514.197 587.555 511.138 581.86 509.19C569.252 505.044 555.648 505.044 543.04 509.19C537.356 511.143 532.115 514.201 527.62 518.19C523.28 522.08 519.823 526.853 517.48 532.19C515.053 537.811 513.83 543.878 513.89 550C513.828 556.168 515.051 562.281 517.48 567.95C519.813 573.328 523.258 578.15 527.59 582.1C532.08 586.115 537.316 589.207 543 591.2C555.612 595.467 569.278 595.467 581.89 591.2C587.593 589.212 592.844 586.112 597.34 582.08C601.666 578.133 605.111 573.318 607.45 567.95C609.866 562.278 611.075 556.165 611 550C611.075 543.879 609.862 537.812 607.44 532.19V532.19ZM585.44 550C585.489 552.92 584.916 555.818 583.76 558.5C582.683 560.918 581.105 563.079 579.13 564.84C577.033 566.673 574.597 568.076 571.96 568.97C565.788 570.994 559.132 570.994 552.96 568.97C550.313 568.066 547.865 566.661 545.75 564.83C543.776 563.087 542.206 560.933 541.15 558.52C539.996 555.83 539.427 552.926 539.48 550C539.426 547.101 539.992 544.223 541.14 541.56C542.183 539.199 543.741 537.101 545.7 535.42C547.809 533.63 550.248 532.271 552.88 531.42C559.105 529.5 565.765 529.5 571.99 531.42C574.609 532.272 577.035 533.631 579.13 535.42C581.09 537.116 582.654 539.223 583.71 541.59C584.882 544.237 585.465 547.106 585.42 550H585.44Z" fill="#262941"/>
<path d="M224.76 571.54H221.33C221.81 570.63 222.27 569.7 222.69 568.75C225.117 563.087 226.339 556.981 226.28 550.82C226.341 544.693 225.115 538.622 222.68 533C220.336 527.667 216.883 522.894 212.55 519C208.041 515.009 202.787 511.95 197.09 510C184.486 505.853 170.884 505.853 158.28 510C152.594 511.955 147.351 515.013 142.85 519C138.517 522.894 135.064 527.667 132.72 533C130.351 538.662 129.13 544.738 129.13 550.875C129.13 557.012 130.351 563.088 132.72 568.75C135.043 574.148 138.49 578.988 142.83 582.95C147.32 586.97 152.556 590.069 158.24 592.07C163.821 594.03 169.676 595.097 175.59 595.23V595.23H224.76C227.797 595.23 230.709 594.024 232.856 591.876C235.004 589.729 236.21 586.817 236.21 583.78V582.95C236.199 579.92 234.988 577.018 232.842 574.879C230.696 572.741 227.79 571.54 224.76 571.54V571.54ZM161 565.65C159.028 563.902 157.456 561.75 156.39 559.34C155.245 556.648 154.68 553.745 154.73 550.82C154.676 547.921 155.242 545.043 156.39 542.38C157.433 540.019 158.991 537.921 160.95 536.24C163.059 534.45 165.498 533.091 168.13 532.24C174.35 530.306 181.01 530.306 187.23 532.24C189.849 533.076 192.278 534.418 194.38 536.19C196.337 537.889 197.9 539.995 198.96 542.36C200.119 545.013 200.692 547.885 200.64 550.78C200.691 553.702 200.114 556.6 198.95 559.28C197.877 561.697 196.302 563.858 194.33 565.62C192.231 567.455 189.791 568.858 187.15 569.75C180.997 571.763 174.363 571.763 168.21 569.75C165.566 568.858 163.118 567.467 161 565.65Z" fill="#262941"/>
<path d="M139.28 630.35C137.624 626.193 134.965 622.51 131.54 619.63C127.867 616.63 123.61 614.427 119.04 613.16C113.629 611.67 108.032 610.959 102.42 611.05H60.76C57.3712 611.063 54.1258 612.419 51.7343 614.82C49.3427 617.22 48 620.471 48 623.86V684.46C48 687.857 49.3496 691.116 51.752 693.518C54.1543 695.92 57.4126 697.27 60.81 697.27C64.2066 697.267 67.4633 695.917 69.8651 693.515C72.2669 691.113 73.6174 687.857 73.62 684.46V679.46C73.62 679.143 73.6827 678.828 73.8044 678.535C73.9261 678.242 74.1046 677.976 74.3294 677.752C74.5543 677.528 74.8211 677.351 75.1147 677.231C75.4082 677.11 75.7227 677.049 76.04 677.05H102.57C108.25 677.152 113.911 676.352 119.34 674.68C123.92 673.26 128.154 670.899 131.77 667.75C135.091 664.787 137.673 661.089 139.31 656.95C140.936 652.769 141.751 648.316 141.71 643.83C141.762 639.223 140.938 634.649 139.28 630.35ZM102.81 653.56H76C75.6827 653.56 75.3685 653.497 75.0754 653.376C74.7824 653.254 74.5162 653.075 74.2923 652.851C74.0684 652.626 73.8911 652.359 73.7706 652.065C73.65 651.772 73.5887 651.457 73.59 651.14V637.09C73.59 636.451 73.8439 635.838 74.2959 635.386C74.7478 634.934 75.3608 634.68 76 634.68H102.83C107.39 634.68 110.7 635.54 112.67 637.22C113.79 638.22 115.29 639.92 115.29 643.87C115.314 645.311 115.063 646.743 114.55 648.09C114.148 649.135 113.491 650.063 112.64 650.79C111.558 651.705 110.298 652.385 108.94 652.79C106.947 653.355 104.881 653.615 102.81 653.56V653.56Z" fill="#262941"/>
<path d="M270.88 611.05C267.452 611.046 264.094 612.02 261.202 613.859C258.309 615.698 256.001 618.325 254.55 621.43L227.22 679.63C226.332 681.516 225.935 683.596 226.066 685.676C226.196 687.757 226.851 689.771 227.968 691.53C229.086 693.29 230.63 694.739 232.457 695.743C234.284 696.746 236.335 697.272 238.42 697.27H238.55C240.917 697.268 243.233 696.588 245.225 695.31C247.218 694.033 248.802 692.21 249.79 690.06L251.72 685.88C251.912 685.461 252.221 685.106 252.609 684.858C252.997 684.61 253.449 684.478 253.91 684.48H288.74C289.196 684.479 289.642 684.607 290.028 684.85C290.414 685.092 290.723 685.439 290.92 685.85L292.99 690.2C293.993 692.316 295.577 694.103 297.556 695.355C299.535 696.606 301.828 697.271 304.17 697.27C306.266 697.269 308.327 696.736 310.161 695.721C311.995 694.706 313.541 693.242 314.654 691.466C315.768 689.69 316.412 687.66 316.526 685.568C316.641 683.475 316.223 681.387 315.31 679.5L287.13 621.24C285.652 618.187 283.344 615.612 280.47 613.809C277.596 612.007 274.272 611.051 270.88 611.05V611.05ZM263 661.58L271 644.16L279.29 661.58H263Z" fill="#262941"/>
<path d="M385.81 623.86V649.01C385.809 649.426 385.701 649.834 385.497 650.196C385.292 650.558 384.998 650.861 384.642 651.076C384.286 651.291 383.881 651.411 383.466 651.424C383.05 651.437 382.638 651.342 382.27 651.15L349.97 617.15C348.149 615.234 345.957 613.708 343.528 612.664C341.099 611.621 338.484 611.082 335.84 611.08C334.158 611.076 332.491 611.404 330.936 612.044C329.38 612.684 327.965 613.624 326.773 614.811C325.581 615.997 324.634 617.407 323.987 618.96C323.339 620.513 323.004 622.178 323 623.86V684.45C322.999 686.133 323.329 687.8 323.972 689.355C324.615 690.911 325.559 692.324 326.748 693.515C327.938 694.705 329.351 695.65 330.906 696.294C332.46 696.938 334.127 697.27 335.81 697.27V697.27C339.208 697.267 342.467 695.916 344.869 693.512C347.271 691.108 348.62 687.848 348.62 684.45V658.05C348.622 657.636 348.73 657.229 348.934 656.868C349.138 656.508 349.431 656.206 349.785 655.991C350.14 655.776 350.543 655.656 350.957 655.642C351.371 655.628 351.782 655.72 352.15 655.91L382.67 690.64C384.499 692.722 386.75 694.391 389.275 695.534C391.799 696.678 394.539 697.269 397.31 697.27H398.59C401.988 697.267 405.247 695.916 407.649 693.512C410.051 691.108 411.4 687.848 411.4 684.45V623.86C411.397 620.463 410.047 617.207 407.645 614.805C405.243 612.403 401.987 611.053 398.59 611.05V611.05C395.198 611.058 391.947 612.411 389.551 614.813C387.156 617.214 385.81 620.468 385.81 623.86V623.86Z" fill="#262941"/>
<path d="M688.63 636.13C686.292 630.796 682.842 626.023 678.51 622.13C674.008 618.14 668.76 615.081 663.07 613.13C650.462 608.984 636.858 608.984 624.25 613.13C618.563 615.082 613.319 618.141 608.82 622.13C604.48 626.02 601.023 630.794 598.68 636.13C596.241 641.751 595.011 647.823 595.07 653.95C595 660.107 596.216 666.21 598.64 671.87C600.976 677.223 604.418 682.021 608.74 685.95C613.226 689.98 618.462 693.086 624.15 695.09C636.763 699.35 650.427 699.35 663.04 695.09C668.74 693.102 673.991 690.006 678.49 685.98C682.824 682.031 686.273 677.208 688.61 671.83C691.038 666.184 692.267 660.096 692.22 653.95C692.284 647.824 691.061 641.753 688.63 636.13V636.13ZM643.63 674.39C640.41 674.424 637.208 673.91 634.16 672.87C631.51 671.973 629.061 670.566 626.95 668.73C624.975 666.983 623.406 664.826 622.35 662.41C620.126 656.962 620.126 650.858 622.35 645.41C623.399 643.053 624.96 640.959 626.92 639.28C629.029 637.49 631.468 636.131 634.1 635.28C640.325 633.36 646.985 633.36 653.21 635.28C655.831 636.129 658.257 637.489 660.35 639.28C662.309 640.977 663.873 643.083 664.93 645.45C666.097 648.129 666.667 651.029 666.6 653.95C666.647 656.868 666.071 659.762 664.91 662.44C663.836 664.865 662.254 667.03 660.27 668.79C658.172 670.618 655.736 672.018 653.1 672.91C650.049 673.931 646.847 674.432 643.63 674.39V674.39Z" fill="#262941"/>
<path d="M174.58 671.13V622.95C174.58 619.804 173.331 616.786 171.107 614.56C168.883 612.334 165.866 611.083 162.72 611.08H160.82C157.681 611.093 154.674 612.35 152.459 614.574C150.244 616.799 149 619.811 149 622.95V685.43C149 688.576 150.249 691.594 152.473 693.82C154.697 696.046 157.714 697.297 160.86 697.3H206.96C210.106 697.297 213.123 696.046 215.347 693.82C217.571 691.594 218.82 688.576 218.82 685.43V685.43C218.82 682.285 217.57 679.268 215.346 677.044C213.122 674.82 210.105 673.57 206.96 673.57H177C176.68 673.571 176.363 673.509 176.068 673.387C175.772 673.264 175.504 673.084 175.279 672.857C175.053 672.63 174.876 672.36 174.756 672.064C174.636 671.767 174.576 671.45 174.58 671.13V671.13Z" fill="#262941"/>
<path d="M506.07 610.88H431.31C429.753 610.88 428.21 611.187 426.771 611.783C425.332 612.379 424.025 613.252 422.924 614.354C421.822 615.455 420.949 616.762 420.353 618.201C419.757 619.64 419.45 621.183 419.45 622.74V622.74C419.45 624.297 419.757 625.84 420.353 627.279C420.949 628.718 421.822 630.025 422.924 631.126C424.025 632.228 425.332 633.101 426.771 633.697C428.21 634.293 429.753 634.6 431.31 634.6H453.49C454.047 634.6 454.587 634.792 455.018 635.143C455.45 635.495 455.747 635.985 455.86 636.53V685.23C455.86 686.787 456.167 688.33 456.763 689.769C457.359 691.208 458.232 692.515 459.334 693.616C460.435 694.718 461.742 695.591 463.181 696.187C464.62 696.783 466.163 697.09 467.72 697.09H469.66C471.217 697.09 472.76 696.783 474.199 696.187C475.638 695.591 476.945 694.718 478.046 693.616C479.148 692.515 480.021 691.208 480.617 689.769C481.213 688.33 481.52 686.787 481.52 685.23V636.53C481.633 635.985 481.93 635.495 482.362 635.143C482.793 634.792 483.333 634.6 483.89 634.6H506.07C509.215 634.6 512.232 633.35 514.456 631.126C516.68 628.902 517.93 625.885 517.93 622.74C517.93 619.595 516.68 616.578 514.456 614.354C512.232 612.13 509.215 610.88 506.07 610.88V610.88Z" fill="#262941"/>
<path d="M547.62 611.04C544.193 611.032 540.834 612.003 537.94 613.838C535.045 615.673 532.735 618.297 531.28 621.4L503.91 679.58C503.023 681.466 502.626 683.545 502.757 685.625C502.887 687.705 503.541 689.719 504.657 691.479C505.773 693.239 507.315 694.689 509.14 695.694C510.966 696.7 513.016 697.228 515.1 697.23H515.23C517.596 697.23 519.912 696.552 521.904 695.276C523.897 694 525.481 692.179 526.47 690.03L528.4 685.85C528.595 685.433 528.904 685.08 529.292 684.833C529.68 684.585 530.13 684.452 530.59 684.45H565.43C565.886 684.453 566.332 684.584 566.717 684.828C567.103 685.072 567.412 685.419 567.61 685.83L569.67 690.18C570.672 692.295 572.253 694.083 574.23 695.336C576.207 696.59 578.499 697.257 580.84 697.26V697.26C582.933 697.257 584.991 696.725 586.822 695.712C588.653 694.699 590.198 693.239 591.312 691.468C592.426 689.696 593.074 687.672 593.194 685.582C593.314 683.493 592.904 681.408 592 679.52L563.86 621.24C562.39 618.182 560.085 615.602 557.211 613.797C554.338 611.992 551.013 611.037 547.62 611.04V611.04ZM539.62 661.56L547.71 644.14L556 661.57L539.62 661.56Z" fill="#262941"/>
<path d="M567 587.02C565.191 585.281 562.779 584.309 560.27 584.309C557.761 584.309 555.349 585.281 553.54 587.02C553.39 587.17 553.26 587.34 553.11 587.5C549.81 585.69 546.56 584.02 542.75 583.72C542.465 583.68 542.178 583.66 541.89 583.66C541.664 583.645 541.436 583.645 541.21 583.66C539.075 583.688 536.967 584.145 535.012 585.004C533.057 585.863 531.295 587.106 529.83 588.66C527.776 590.758 526.493 593.49 526.19 596.41C526.137 597.664 526.344 598.916 526.799 600.086C527.253 601.256 527.945 602.32 528.83 603.21C530.581 604.942 532.928 605.938 535.39 605.993C537.852 606.049 540.242 605.161 542.07 603.51C542.31 603.28 542.56 603.02 542.8 602.76C543.07 602.9 543.35 603.04 543.62 603.2C547.32 605.36 551.32 607.2 555.73 606.81C558.105 606.645 560.412 605.941 562.476 604.753C564.539 603.564 566.305 601.922 567.64 599.95C570.44 595.95 570.78 590.59 567 587.02V587.02Z" fill="#262941"/>
<path d="M436.81 48H395.1C389.047 47.9961 383.054 49.1848 377.461 51.4983C371.868 53.8117 366.785 57.2046 362.504 61.483C358.223 65.7614 354.827 70.8414 352.51 76.4329C350.193 82.0243 349 88.0175 349 94.07V129.66C349.003 141.956 353.889 153.748 362.585 162.442C371.281 171.136 383.074 176.02 395.37 176.02H409.79V195.52H386.19C371.224 195.52 356.871 189.575 346.288 178.992C335.705 168.409 329.76 154.056 329.76 139.09V128.56C329.76 126.772 329.05 125.058 327.786 123.794C326.522 122.53 324.808 121.82 323.02 121.82H300.26C288.041 121.82 276.323 126.674 267.684 135.314C259.044 143.953 254.19 155.671 254.19 167.89V363.46C254.189 364.42 254.377 365.37 254.743 366.257C255.109 367.144 255.647 367.949 256.325 368.628C257.003 369.307 257.808 369.846 258.694 370.213C259.58 370.581 260.531 370.77 261.49 370.77H329.61C331.477 372.83 333.32 374.917 335.14 377.03L367.02 414.03L370.81 418.42C371.449 419.161 372.241 419.755 373.13 420.162C374.02 420.569 374.987 420.78 375.965 420.78C376.943 420.78 377.91 420.569 378.8 420.162C379.689 419.755 380.481 419.161 381.12 418.42L384.91 414.03L416.8 377.03C419.8 373.52 422.9 370.03 426.08 366.67C428.325 364.297 430.393 361.764 432.27 359.09C439.566 348.746 443.851 336.583 444.65 323.95C444.74 322.47 444.79 320.95 444.79 319.46C444.798 310.127 442.901 300.891 439.216 292.316C435.532 283.741 430.136 276.008 423.36 269.59V209.07H436.81C449.029 209.07 460.747 204.216 469.386 195.576C478.026 186.937 482.88 175.219 482.88 163V94.07C482.88 81.8515 478.026 70.1334 469.386 61.4936C460.747 52.8538 449.029 48 436.81 48V48ZM267.74 330.25H308C309.502 339.89 313.052 349.097 318.41 357.25H267.74V330.25ZM431.24 318.95C431.268 332.157 426.547 344.933 417.94 354.95L417.66 355.28L390.49 386.78L376 403.62L361.47 386.78L334.25 355.21L334.13 355.07C328.303 348.319 324.196 340.259 322.16 331.577C320.124 322.895 320.219 313.849 322.436 305.212C324.654 296.575 328.929 288.602 334.895 281.975C340.862 275.348 348.344 270.263 356.702 267.154C365.06 264.045 374.046 263.005 382.894 264.122C391.741 265.239 400.187 268.48 407.51 273.569C414.833 278.658 420.816 285.443 424.948 293.345C429.08 301.248 431.239 310.032 431.24 318.95V318.95ZM376 250.67C358.238 250.673 341.165 257.543 328.352 269.844C315.539 282.145 307.978 298.923 307.25 316.67H267.74V168.17C267.739 163.863 268.586 159.598 270.233 155.619C271.88 151.639 274.295 148.023 277.34 144.978C280.385 141.932 284.001 139.515 287.979 137.867C291.958 136.218 296.223 135.37 300.53 135.37H316.24V138.58C316.24 157.275 323.667 175.205 336.886 188.424C350.105 201.643 368.035 209.07 386.73 209.07H409.82V259.58C399.508 253.733 387.854 250.663 376 250.67V250.67ZM469.36 162.73C469.36 171.426 465.905 179.767 459.756 185.916C453.607 192.065 445.266 195.52 436.57 195.52H423.36V170.42C423.36 168.298 422.517 166.263 421.017 164.763C419.517 163.263 417.482 162.42 415.36 162.42H395.36C386.663 162.42 378.321 158.966 372.17 152.817C366.02 146.668 362.563 138.327 362.56 129.63V94.34C362.563 85.6426 366.02 77.3024 372.17 71.1534C378.321 65.0043 386.663 61.55 395.36 61.55H436.52C440.826 61.55 445.09 62.3981 449.068 64.046C453.046 65.6938 456.661 68.1091 459.706 71.154C462.751 74.1988 465.166 77.8136 466.814 81.7918C468.462 85.7701 469.31 90.034 469.31 94.34L469.36 162.73Z" fill="#262941"/>
<path d="M376 296.45C371.703 296.448 367.503 297.72 363.929 300.106C360.356 302.492 357.57 305.884 355.925 309.854C354.28 313.823 353.849 318.191 354.687 322.405C355.525 326.619 357.593 330.49 360.632 333.528C363.67 336.567 367.541 338.635 371.755 339.473C375.969 340.311 380.337 339.88 384.307 338.235C388.276 336.59 391.668 333.804 394.054 330.231C396.44 326.657 397.712 322.457 397.71 318.16C397.71 312.402 395.423 306.88 391.351 302.809C387.28 298.737 381.758 296.45 376 296.45V296.45ZM376 326.65C374.32 326.652 372.678 326.156 371.28 325.224C369.883 324.292 368.793 322.967 368.149 321.416C367.505 319.865 367.335 318.157 367.662 316.51C367.988 314.862 368.796 313.349 369.983 312.16C371.17 310.972 372.683 310.162 374.33 309.834C375.977 309.505 377.685 309.673 379.237 310.315C380.789 310.958 382.115 312.046 383.048 313.442C383.982 314.839 384.48 316.48 384.48 318.16C384.48 320.41 383.587 322.568 381.997 324.16C380.407 325.752 378.25 326.647 376 326.65V326.65Z" fill="#262941"/>
<path d="M469.33 162.73C469.33 167.036 468.482 171.3 466.834 175.278C465.186 179.256 462.771 182.871 459.726 185.916C456.681 188.961 453.066 191.376 449.088 193.024C445.11 194.672 440.846 195.52 436.54 195.52H423.36V170.42C423.36 168.298 422.517 166.263 421.017 164.763C419.517 163.263 417.482 162.42 415.36 162.42H395.36C386.663 162.42 378.321 158.966 372.17 152.817C366.02 146.668 362.563 138.327 362.56 129.63V94.34C362.563 85.6426 366.02 77.3024 372.17 71.1534C378.321 65.0043 386.663 61.55 395.36 61.55H436.52C440.826 61.55 445.09 62.3981 449.068 64.046C453.046 65.6938 456.661 68.1091 459.706 71.154C462.751 74.1988 465.166 77.8135 466.814 81.7918C468.462 85.7701 469.31 90.0339 469.31 94.34L469.33 162.73Z" fill="url(#paint0_linear)"/>
<path d="M435.77 106.85H423V94.08C423 90.61 419.94 87.28 416.36 87.44C414.608 87.4683 412.935 88.177 411.696 89.4161C410.457 90.6553 409.748 92.3278 409.72 94.08V106.85H397C393.53 106.85 390.2 109.9 390.36 113.49C390.388 115.242 391.097 116.915 392.336 118.154C393.575 119.393 395.248 120.102 397 120.13H409.77V132.95C409.77 136.42 412.77 139.75 416.41 139.59C418.153 139.549 419.813 138.835 421.042 137.597C422.27 136.359 422.972 134.694 423 132.95V120.13H435.77C439.24 120.13 442.57 117.08 442.41 113.49C442.382 111.738 441.673 110.065 440.434 108.826C439.195 107.587 437.522 106.878 435.77 106.85V106.85Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear" x1="381.91" y1="162.58" x2="466.53" y2="77.96" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF333D"/>
<stop offset="1" stop-color="#9E0000"/>
</linearGradient>
</defs>
</svg>
`

function QueroPlantaoLogoVertical({ ...others }) {
  return (
    <SvgXml xml={xml} {...others} />
  )
}

export default QueroPlantaoLogoVertical
