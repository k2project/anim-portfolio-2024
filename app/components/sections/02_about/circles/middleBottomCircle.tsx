'use client';
import { m } from 'framer-motion';
import useCircleAnimation from './useCircleAnimation';

export default function MiddleBottomCircle({
    size = 300,
    style = 'fill-tertiary stroke-tertiary stroke-[.2px]',
}: {
    size?: number;
    style?: string;
}) {
    const { rotate } = useCircleAnimation({
        inputRange: [0, 1950],
        outputRange: [0, -360],
    });

    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 84.192688 84.274483'
            version='1.1'
            id='svgBottomCircle'
            xmlns='http://www.w3.org/2000/svg'
            className='absolute overflow-visible'
        >
            <g
                id='layer1'
                transform='translate(-96.596354,-80.342957)'
                className={style}
            >
                <m.g
                    id='g52476'
                    style={{
                        rotate,
                    }}
                >
                    <g
                        // aria-label='EXPERIENCED+DILIGENT+  '
                        transform='translate(0.01125224,0.11177354)'
                        id='text3136'
                    >
                        <path
                            d='m 165.83798,124.29635 -0.69653,4.59692 -1.37622,-0.20852 0.47063,-3.10603 -1.26152,-0.19115 -0.44457,2.93401 -1.37621,-0.20853 0.44456,-2.93401 -1.37621,-0.20852 -0.49669,3.27806 -1.37621,-0.20853 0.72259,-4.76895 z'
                            id='path80515'
                        />
                        <path
                            d='m 160.40122,132.40241 3.94059,-0.51189 -0.86875,1.68363 -2.79961,0.19785 1.48761,2.34478 -0.83772,1.6235 -1.86262,-3.45196 -4.33875,0.54574 0.86875,-1.68363 3.21495,-0.22283 -1.70349,-2.70635 0.81999,-1.58914 z'
                            id='path80517'
                        />
                        <path
                            d='m 159.2933,140.23662 -1.82401,1.77079 q -0.38145,0.37032 -0.78861,0.63089 -0.40717,0.26056 -0.82517,0.32957 -0.4182,0.0827 -0.84663,-0.0672 -0.42863,-0.13622 -0.85282,-0.57315 -0.41745,-0.43 -0.56153,-0.85594 -0.14408,-0.42595 -0.0697,-0.83499 0.0744,-0.40904 0.33325,-0.80852 0.26557,-0.39254 0.65395,-0.76959 l 0.79063,-0.76757 -1.85832,-1.91417 1.08192,-1.05036 z m -3.10184,-1.03026 -0.72128,0.70024 q -0.14565,0.14139 -0.25049,0.29706 -0.11177,0.1624 -0.15521,0.32582 -0.0436,0.17708 0.002,0.34864 0.0451,0.18524 0.21343,0.35862 0.1818,0.18726 0.37969,0.21069 0.19768,0.0371 0.39699,-0.0351 0.19237,-0.0655 0.37228,-0.21323 0.18665,-0.14078 0.33923,-0.28891 l 0.55483,-0.53865 z'
                            id='path80519'
                        />
                        <path
                            d='m 153.03229,145.5641 -4.14811,2.10002 -0.6287,-1.24184 2.80278,-1.41894 -0.57631,-1.13836 -2.64754,1.34035 -0.6287,-1.24185 2.64755,-1.34034 -0.6287,-1.24185 -2.95801,1.49752 -0.6287,-1.24184 4.30334,-2.17861 z'
                            id='path80521'
                        />
                        <path
                            d='m 145.53726,148.76594 -2.6145,0.42313 q -0.51526,0.0834 -0.99026,0.0526 -0.483,-0.0198 -0.86512,-0.2027 -0.39011,-0.17187 -0.65535,-0.5402 -0.27324,-0.35725 -0.36899,-0.94885 -0.11582,-0.71565 0.17447,-1.2816 0.29184,-0.55641 0.98586,-0.80581 l -2.17929,-2.57508 1.78435,-0.28878 1.84924,2.47182 0.73473,-0.1189 -0.43703,-2.70038 1.48854,-0.2409 z m -1.94102,-2.55489 -0.87786,0.14208 q -0.20038,0.0324 -0.4183,0.0775 -0.22592,0.0561 -0.3964,0.15228 -0.16895,0.10567 -0.25874,0.27688 -0.0993,0.17274 -0.0546,0.44946 0.0417,0.25763 0.17137,0.39332 0.12967,0.13568 0.30424,0.18576 0.17611,0.0596 0.39066,0.0543 0.21456,-0.005 0.41494,-0.0378 l 0.97328,-0.15751 z'
                            id='path80523'
                        />
                        <path
                            d='m 137.79795,149.49438 -1.50478,-0.0972 0.44119,-6.82937 1.50477,0.0972 z'
                            id='path80525'
                        />
                        <path
                            d='m 133.33786,149.04805 -4.4587,-1.3179 0.39455,-1.33483 3.01263,0.89047 0.36167,-1.22359 -2.84578,-0.84116 0.39455,-1.33483 2.84578,0.84116 0.39455,-1.33483 -3.17949,-0.9398 0.39455,-1.33483 4.62556,1.36723 z'
                            id='path80527'
                        />
                        <path
                            d='m 125.40422,146.17105 -1.64992,-1.21534 0.47793,-5.55461 -0.0156,-0.0115 -2.82051,3.82906 -1.21409,-0.89431 4.05878,-5.51011 1.58766,1.16948 -0.48447,5.69387 0.0156,0.0115 2.88931,-3.92244 1.21409,0.8943 z'
                            id='path80529'
                        />
                        <path
                            d='m 116.64491,134.70557 q -0.10535,0.33403 -0.0474,0.68853 0.0527,0.3464 0.28493,0.70272 0.23223,0.35631 0.57045,0.57431 0.33295,0.2099 0.73177,0.27303 0.38544,0.0603 0.81,-0.0318 0.41929,-0.1002 0.81609,-0.35882 0.4049,-0.26389 0.66585,-0.60704 0.24757,-0.34596 0.3561,-0.72822 0.10044,-0.37698 0.0481,-0.75823 -0.0576,-0.38935 -0.27929,-0.72947 -0.25334,-0.3887 -0.61058,-0.58277 -0.35724,-0.19407 -0.77544,-0.19841 l 0.0994,-1.5647 q 0.74768,0.0319 1.35479,0.43233 0.60712,0.40042 0.9924,0.99157 0.43807,0.67214 0.59697,1.37622 0.15891,0.70409 0.0394,1.37042 -0.12763,0.67162 -0.53333,1.27063 -0.41098,0.59092 -1.09931,1.03955 -0.68833,0.44862 -1.39487,0.58605 -0.71182,0.12933 -1.3697,-0.0303 -0.66597,-0.15438 -1.24597,-0.58401 -0.58,-0.42963 -1.01807,-1.10177 -0.15834,-0.24294 -0.27864,-0.53374 -0.13368,-0.29362 -0.20012,-0.608 -0.0717,-0.32247 -0.0628,-0.66287 0.009,-0.34039 0.12235,-0.67971 z'
                            id='path80531'
                        />
                        <path
                            d='m 113.30171,131.69181 -1.19851,-4.49227 1.34488,-0.35881 0.8098,3.03532 1.23281,-0.3289 -0.76496,-2.86721 1.34488,-0.35881 0.76496,2.86721 1.34488,-0.3588 -0.85466,-3.20343 1.34488,-0.35881 1.24336,4.66038 z'
                            id='path80533'
                        />
                        <path
                            d='m 111.65553,123.52691 0.16209,-2.25606 q 0.0589,-0.8195 0.2947,-1.53908 0.23652,-0.72921 0.69058,-1.24898 0.44442,-0.52046 1.12288,-0.79152 0.67916,-0.2807 1.61436,-0.21351 0.82915,0.0596 1.44261,0.42345 0.60452,0.35354 1.00028,0.91498 0.38612,0.56075 0.55799,1.27085 0.17188,0.7101 0.11716,1.47176 l -0.17664,2.45852 z m 5.54573,-1.11337 0.0561,-0.78094 q 0.0374,-0.52063 -0.0368,-0.97175 -0.0735,-0.46075 -0.29098,-0.80587 -0.22712,-0.34582 -0.60925,-0.5574 -0.39108,-0.22192 -0.96955,-0.26348 -0.50135,-0.036 -0.88157,0.13049 -0.38917,0.15617 -0.65306,0.45701 -0.26389,0.30084 -0.41076,0.72639 -0.15581,0.41521 -0.18975,0.88763 l -0.0637,0.887 z'
                            id='path80535'
                        />
                        <path
                            d='m 116.03648,115.39252 0.82115,-1.86695 -1.86694,-0.82115 0.49036,-1.11485 1.86694,0.82115 0.82115,-1.86694 1.11486,0.49035 -0.82116,1.86695 1.86695,0.82115 -0.49036,1.11485 -1.86694,-0.82115 -0.82116,1.86694 z'
                            id='path80537'
                        />
                        <path
                            d='m 117.11053,106.14834 1.55163,-1.64576 q 0.56362,-0.59781 1.2012,-1.00634 0.64421,-0.41557 1.32459,-0.53133 0.67336,-0.12239 1.37043,0.0964 0.7037,0.21178 1.38592,0.85497 0.60485,0.57026 0.85021,1.23999 0.24497,0.65607 0.19676,1.34128 -0.0552,0.67858 -0.37091,1.33748 -0.31566,0.6589 -0.8395,1.21451 l -1.69088,1.79345 z m 5.0011,2.64265 0.5371,-0.56968 q 0.35807,-0.37979 0.58573,-0.77625 0.23429,-0.4035 0.28391,-0.8084 0.0426,-0.41153 -0.11978,-0.81702 -0.16278,-0.41916 -0.58476,-0.81702 -0.36573,-0.3448 -0.7656,-0.45612 -0.40028,-0.12497 -0.79493,-0.0587 -0.39465,0.0663 -0.77744,0.30324 -0.38319,0.22326 -0.7081,0.56788 l -0.61004,0.64705 z'
                            id='path80539'
                        />
                        <path
                            d='m 123.77243,100.05555 1.27556,-0.804209 3.64986,5.789079 -1.27556,0.80421 z'
                            id='path80541'
                        />
                        <path
                            d='m 127.52011,97.896782 1.41029,-0.533733 1.92965,5.098761 2.61267,-0.98878 0.49267,1.30181 -4.02295,1.52251 z'
                            id='path80543'
                        />
                        <path
                            d='m 133.70976,95.972277 1.48851,-0.241139 1.0944,6.755532 -1.4885,0.24114 z'
                            id='path80545'
                        />
                        <path
                            d='m 143.89495,102.25475 q -0.69705,0.28294 -1.43343,0.36792 -0.73638,0.085 -1.48692,0.0132 -0.79865,-0.0763 -1.44829,-0.3909 -0.64965,-0.31456 -1.09624,-0.82333 -0.44566,-0.5184 -0.66125,-1.20901 -0.20596,-0.689685 -0.12778,-1.507577 0.0782,-0.817891 0.41106,-1.456074 0.3425,-0.637264 0.87739,-1.052226 0.5358,-0.424585 1.23327,-0.610383 0.69747,-0.185797 1.49612,-0.10946 0.81789,0.07818 1.48175,0.345544 0.67441,0.258666 1.14803,0.789444 l -1.16882,1.0535 q -0.27756,-0.346965 -0.64682,-0.547333 -0.36925,-0.200367 -0.94659,-0.25555 -0.48111,-0.04599 -0.89126,0.07988 -0.40052,0.126789 -0.70808,0.398407 -0.30664,0.261996 -0.49922,0.651415 -0.18296,0.390339 -0.22803,0.861829 -0.046,0.481113 0.0597,0.899043 0.11625,0.409231 0.36678,0.734191 0.25146,0.31534 0.62071,0.51571 0.37888,0.20129 0.85999,0.24727 0.49073,0.0469 0.85688,-0.0249 0.36706,-0.0814 0.58978,-0.17667 l 0.10577,-1.106559 -1.22203,-0.116805 0.13244,-1.385605 2.66537,0.254764 z'
                            id='path80547'
                        />
                        <path
                            d='m 148.06159,97.031666 4.21849,1.954808 -0.58522,1.262916 -2.85033,-1.320817 -0.53646,1.157677 2.69247,1.24766 -0.58522,1.26291 -2.69247,-1.24766 -0.58522,1.26292 3.00819,1.39396 -0.58522,1.26292 -4.37635,-2.02796 z'
                            id='path80549'
                        />
                        <path
                            d='m 155.48329,101.02869 1.45683,1.44116 -1.27615,5.42711 0.0137,0.0136 3.34458,-3.38094 1.072,1.06047 -4.81292,4.86526 -1.40186,-1.38678 1.30276,-5.56396 -0.0137,-0.0136 -3.42614,3.4634 -1.07201,-1.06047 z'
                            id='path80551'
                        />
                        <path
                            d='m 161.48944,110.47492 -0.86421,-1.75089 1.19615,-0.5904 2.39584,4.85394 -1.19615,0.5904 -0.86421,-1.75088 -4.94062,2.43863 -0.66741,-1.35217 z'
                            id='path80553'
                        />
                        <path
                            d='m 161.77051,116.10209 0.32434,2.0136 2.01359,-0.32434 0.19368,1.20243 -2.0136,0.32434 0.32434,2.01359 -1.20243,0.19368 -0.32434,-2.01359 -2.01359,0.32433 -0.19368,-1.20243 2.01359,-0.32433 -0.32433,-2.0136 z'
                            id='path80555'
                        />
                    </g>
                </m.g>
            </g>
        </svg>
    );
}
