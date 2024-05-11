'use client';

import { m } from 'framer-motion';
import useCircleAnimation from './useCircleAnimation';

export default function OuterCircle({
    size = 300,
    style = 'fill-tertiary stroke-tertiary stroke-[.2px]',
}: {
    size?: number;
    style?: string;
}) {
    const { rotate } = useCircleAnimation({
        inputRange: [0, 2250],
        outputRange: [0, -360],
    });

    return (
        <svg
            width={size}
            height={size}
            viewBox='0 0 84.192688 84.274483'
            version='1.1'
            id='svgOuterCircle'
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
                        // aria-label='+AVID LEARNER+CREATIVE PROBLEM SOLVER'
                        id='text47941'
                    >
                        <path
                            d='m 177.40395,123.3964 -0.18399,2.02376 2.02376,0.18399 -0.10988,1.2085 -2.02376,-0.18399 -0.18399,2.02376 -1.2085,-0.10988 0.18399,-2.02376 -2.02375,-0.18399 0.10987,-1.2085 2.02376,0.18399 0.18399,-2.02375 z'
                            id='path80620'
                        />
                        <path
                            d='m 179.12809,133.60306 -0.33854,1.19536 -7.3689,0.99601 0.46189,-1.63089 1.55004,-0.17159 0.7217,-2.54825 -1.23512,-0.94037 0.45138,-1.59382 z m -2.06634,0.0154 -1.81291,-1.37427 -0.45401,1.60308 z'
                            id='path80622'
                        />
                        <path
                            d='m 177.67165,138.30967 -0.772,1.53062 -4.74892,-0.50758 -0.009,0.0172 3.21793,3.54303 -0.72429,1.43603 -4.82165,-5.58156 0.54213,-1.07487 z'
                            id='path80624'
                        />
                        <path
                            d='m 173.64824,145.63742 -0.85434,1.23587 -5.6089,-3.87736 0.85433,-1.23586 z'
                            id='path80626'
                        />
                        <path
                            d='m 171.43536,148.81833 -1.53542,1.64962 q -0.55773,0.59923 -1.19036,1.01033 -0.63919,0.41816 -1.31633,0.53784 -0.6701,0.12625 -1.36602,-0.0873 -0.70247,-0.2065 -1.38629,-0.84297 -0.60627,-0.5643 -0.85502,-1.23001 -0.24826,-0.65209 -0.20461,-1.3351 0.0507,-0.67644 0.361,-1.33494 0.31029,-0.65849 0.82866,-1.21542 l 1.67321,-1.79767 z m -4.99964,-2.601 -0.53149,0.57103 q -0.35433,0.38068 -0.57861,0.77715 -0.23085,0.40351 -0.2777,0.80724 -0.0398,0.41029 0.12456,0.81326 0.16486,0.41658 0.58784,0.81028 0.36658,0.3412 0.7657,0.44955 0.39961,0.12196 0.79239,0.0534 0.39277,-0.0686 0.77264,-0.3071 0.38036,-0.22489 0.70188,-0.57032 l 0.60366,-0.64857 z'
                            id='path80628'
                        />
                        <path
                            d='m 162.6205,156.92595 -1.27112,0.80092 -2.89563,-4.59561 -2.35485,1.48375 -0.73931,-1.17334 3.62597,-2.28468 z'
                            id='path80630'
                        />
                        <path
                            d='m 157.22153,160.12339 -4.26479,1.80859 -0.54145,-1.27677 2.88161,-1.22202 -0.49632,-1.17038 -2.72202,1.15434 -0.54145,-1.27678 2.72202,-1.15434 -0.54145,-1.27677 -3.04121,1.2897 -0.54145,-1.27678 4.42438,-1.87627 z'
                            id='path80632'
                        />
                        <path
                            d='m 148.2108,163.261 -1.21478,0.26042 -4.32972,-6.04533 1.65737,-0.35532 0.87725,1.28938 2.58964,-0.55517 0.25277,-1.53164 1.6197,-0.34724 z m -0.98089,-1.81875 0.3657,-2.24533 -1.62911,0.34926 z'
                            id='path80634'
                        />
                        <path
                            d='m 142.10609,164.26155 -2.63828,0.0548 q -0.51995,0.0108 -0.98434,-0.0855 -0.4738,-0.0865 -0.82544,-0.32 -0.36107,-0.22369 -0.57167,-0.62389 -0.22004,-0.39038 -0.23245,-0.98736 -0.015,-0.72216 0.34992,-1.24029 0.36511,-0.5085 1.08447,-0.6583 l -1.793,-2.84299 1.80058,-0.0374 1.48167,2.69532 0.74142,-0.0154 -0.0566,-2.72494 1.50209,-0.0312 z m -1.56071,-2.79001 -0.88585,0.0184 q -0.2022,0.004 -0.42346,0.0184 -0.23069,0.0241 -0.41224,0.0953 -0.18134,0.0808 -0.29369,0.2373 -0.12197,0.15666 -0.11617,0.43589 0.005,0.25998 0.11452,0.41184 0.10912,0.15186 0.27441,0.22549 0.16549,0.0832 0.37792,0.10774 0.21243,0.0245 0.41464,0.0203 l 0.98213,-0.0204 z'
                            id='path80636'
                        />
                        <path
                            d='m 134.48605,164.22652 -2.00904,-0.36394 -2.00782,-5.17922 -0.019,-0.003 -0.84463,4.66248 -1.47834,-0.26781 1.21544,-6.70943 1.93322,0.35022 2.06304,5.30666 0.019,0.003 0.86523,-4.7762 1.47835,0.26781 z'
                            id='path80638'
                        />
                        <path
                            d='m 125.44496,162.20779 -4.3032,-1.71519 0.51349,-1.28828 2.90757,1.15891 0.47069,-1.18092 -2.74653,-1.09472 0.51348,-1.28828 2.74654,1.09473 0.51348,-1.28828 -3.0686,-1.22309 0.51349,-1.28828 4.46423,1.77937 z'
                            id='path80640'
                        />
                        <path
                            d='m 118.81915,159.32701 -2.24153,-1.39251 q -0.44176,-0.27443 -0.77853,-0.60836 -0.35004,-0.33083 -0.51749,-0.71831 -0.18072,-0.38438 -0.13907,-0.83469 0.0284,-0.44722 0.34348,-0.95443 0.38116,-0.61356 0.96957,-0.84893 0.58332,-0.2272 1.26802,0.0394 l 0.047,-3.36083 1.5298,0.95036 -0.22748,3.06731 0.62991,0.39132 1.43825,-2.31516 1.27619,0.79282 z m 0.21286,-3.18978 -0.75263,-0.46755 q -0.17179,-0.10673 -0.36503,-0.21544 -0.20651,-0.10561 -0.39751,-0.1449 -0.1961,-0.0311 -0.37558,0.0388 -0.18766,0.0648 -0.33505,0.30207 -0.13721,0.22088 -0.12854,0.40767 0.009,0.1868 0.10709,0.33864 0.0933,0.16002 0.25807,0.29637 0.16473,0.13635 0.33652,0.24308 l 0.83444,0.51837 z'
                            id='path80642'
                        />
                        <path
                            d='m 114.89603,152.83137 -1.50596,-1.36438 -1.36438,1.50596 -0.8993,-0.81475 1.36438,-1.50596 -1.50596,-1.36438 0.81475,-0.89929 1.50596,1.36438 1.36438,-1.50596 0.8993,0.81475 -1.36438,1.50596 1.50596,1.36438 z'
                            id='path80644'
                        />
                        <path
                            d='m 105.77568,145.23667 q -0.0807,0.33952 0.002,0.68764 0.0772,0.34046 0.3336,0.67788 0.25635,0.33742 0.60812,0.52978 0.34594,0.18469 0.7468,0.21879 0.38737,0.0323 0.80267,-0.0897 0.40947,-0.12968 0.78523,-0.41516 0.38343,-0.29132 0.61812,-0.65105 0.22119,-0.36158 0.30161,-0.74924 0.0727,-0.38184 -0.007,-0.75696 -0.0852,-0.38279 -0.32992,-0.70487 -0.27966,-0.36809 -0.6486,-0.5353 -0.36895,-0.16721 -0.78485,-0.14151 l -0.0136,-1.56207 q 0.7453,-0.022 1.37738,0.33238 0.63207,0.35434 1.05739,0.91415 0.48358,0.63649 0.69203,1.32477 0.20846,0.68829 0.13751,1.35905 -0.0786,0.67658 -0.43879,1.30099 -0.366,0.61673 -1.01783,1.11197 -0.65183,0.49523 -1.3441,0.68252 -0.69809,0.17963 -1.36332,0.0682 -0.67291,-0.10561 -1.28013,-0.49092 -0.60722,-0.38532 -1.0908,-1.02182 -0.17479,-0.23005 -0.31522,-0.51041 -0.15393,-0.28219 -0.24252,-0.58983 -0.0944,-0.31531 -0.11001,-0.65423 -0.0156,-0.33891 0.0728,-0.68425 z'
                            id='path80646'
                        />
                        <path
                            d='m 102.51776,143.45162 -1.18625,-2.35719 q -0.23378,-0.46456 -0.34696,-0.92512 -0.12611,-0.46483 -0.0669,-0.88277 0.0463,-0.42221 0.31669,-0.7847 0.25747,-0.36677 0.79085,-0.63519 0.64521,-0.3247 1.27001,-0.21865 0.61619,0.11039 1.06134,0.69499 l 1.79297,-2.84299 0.80959,1.60874 -1.79387,2.49843 0.33336,0.66242 2.43462,-1.2252 0.67538,1.34205 z m 1.84526,-2.61055 -0.3983,-0.79147 q -0.0909,-0.18066 -0.19909,-0.37419 -0.12111,-0.19781 -0.26359,-0.33096 -0.15108,-0.12882 -0.34068,-0.16279 -0.19393,-0.0426 -0.44341,0.083 -0.23228,0.1169 -0.3223,0.2808 -0.09,0.1639 -0.0853,0.34478 -0.004,0.18522 0.0656,0.38747 0.0694,0.20225 0.16035,0.38291 l 0.4416,0.87749 z'
                            id='path80648'
                        />
                        <path
                            d='m 99.363713,136.63403 -1.320855,-4.44013 1.32927,-0.39544 0.892472,3.00009 1.21849,-0.36248 -0.84304,-2.83393 1.32927,-0.39543 0.84304,2.83393 1.32927,-0.39543 -0.9419,-3.16625 1.32927,-0.39543 1.37029,4.60628 z'
                            id='path80650'
                        />
                        <path
                            d='m 97.266741,127.41846 -0.139458,-1.23452 6.442557,-3.71295 0.19027,1.68431 -1.36955,0.74593 0.2973,2.63174 1.49928,0.40247 0.18594,1.64603 z m 1.906548,-0.7969 2.198361,0.58518 -0.18702,-1.6556 z'
                            id='path80652'
                        />
                        <path
                            d='m 98.328376,121.04572 -0.104903,1.9426 -1.327121,-0.0717 0.290822,-5.38541 1.327121,0.0717 -0.104904,1.9426 5.481589,0.29602 -0.081,1.50022 z'
                            id='path80654'
                        />
                        <path
                            d='m 97.478175,115.99344 0.259113,-1.47989 6.716452,1.17597 -0.25911,1.4799 z'
                            id='path80656'
                        />
                        <path
                            d='m 97.957745,112.86697 0.525915,-1.63162 4.77027,-0.23321 0.006,-0.0183 -3.727306,-3.00255 0.493416,-1.53079 5.62709,4.76844 -0.36932,1.1458 z'
                            id='path80658'
                        />
                        <path
                            d='m 100.91841,104.62041 2.20608,-4.07341 1.21948,0.66045 -1.49059,2.7523 1.11786,0.60541 1.40803,-2.59987 1.21948,0.66045 -1.40803,2.59986 1.21948,0.66045 1.57314,-2.90474 1.21949,0.66045 -2.28863,4.22584 z'
                            id='path80660'
                        />
                        <path
                            d='m 106.62458,95.685815 1.72837,-1.851586 q 0.36144,-0.387213 0.75386,-0.666468 0.39242,-0.279255 0.80501,-0.368411 0.41212,-0.102767 0.84581,0.0254 0.43323,0.114555 0.87677,0.528575 0.43649,0.407448 0.60075,0.824266 0.16425,0.416818 0.11025,0.82752 -0.054,0.410703 -0.29201,0.820924 -0.24504,0.403649 -0.61305,0.797903 l -0.74918,0.802589 1.94311,1.8138 -1.02519,1.098283 z m 3.13726,0.873243 0.68347,-0.732186 q 0.138,-0.147845 0.2347,-0.307897 0.10328,-0.167092 0.13849,-0.331841 0.0348,-0.178362 -0.0187,-0.346872 -0.054,-0.182122 -0.22997,-0.346415 -0.19009,-0.177437 -0.38817,-0.191062 -0.19854,-0.02724 -0.39334,0.05442 -0.18823,0.07462 -0.36003,0.230441 -0.17884,0.149251 -0.32342,0.304137 l -0.52574,0.56322 z'
                            id='path80662'
                        />
                        <path
                            d='m 111.74471,90.521205 2.10915,-1.585883 q 0.41567,-0.312546 0.84882,-0.505691 0.43506,-0.206631 0.85687,-0.222555 0.42373,-0.02941 0.82847,0.172345 0.40665,0.188268 0.7655,0.66552 0.43409,0.57732 0.44064,1.211022 7.6e-4,0.626003 -0.49553,1.167862 l 3.11615,1.259764 -1.43945,1.082336 -2.77722,-1.321815 -0.59271,0.445667 1.63797,2.178424 -1.20083,0.902911 z m 2.89668,1.352488 0.70818,-0.532486 q 0.16165,-0.121546 0.33291,-0.262365 0.17317,-0.154305 0.27891,-0.318158 0.1,-0.171551 0.0997,-0.364167 0.007,-0.198404 -0.16038,-0.421635 -0.15628,-0.207836 -0.33356,-0.26733 -0.17728,-0.0595 -0.35444,-0.02268 -0.18295,0.02912 -0.36966,0.133356 -0.18671,0.104241 -0.34836,0.225787 l -0.78516,0.590365 z'
                            id='path80664'
                        />
                        <path
                            d='m 119.09471,89.320731 q -0.34937,-0.740324 -0.38911,-1.456379 -0.031,-0.720166 0.21588,-1.347854 0.24279,-0.636398 0.7456,-1.150568 0.50281,-0.51417 1.22572,-0.855322 0.7229,-0.341152 1.43945,-0.402418 0.71654,-0.06127 1.36214,0.155885 0.64148,0.208442 1.16896,0.694323 0.53619,0.481771 0.88556,1.222094 0.34938,0.740323 0.3804,1.460489 0.0397,0.716056 -0.20305,1.352454 -0.2469,0.627688 -0.74971,1.141858 -0.50282,0.51417 -1.22572,0.855322 -0.7229,0.341152 -1.43945,0.402418 -0.71654,0.06127 -1.35803,-0.147175 -0.6456,-0.217152 -1.18179,-0.698923 -0.52747,-0.485881 -0.87685,-1.226204 z m 1.41097,-0.665862 q 0.20552,0.435484 0.50879,0.739637 0.30788,0.291333 0.68788,0.442136 0.37589,0.142093 0.79415,0.125747 0.42697,-0.02046 0.86245,-0.225969 0.43549,-0.205513 0.714,-0.517988 0.28722,-0.316585 0.4165,-0.697074 0.12516,-0.389197 0.0873,-0.807948 -0.0333,-0.431571 -0.23878,-0.867056 -0.20141,-0.426774 -0.51339,-0.726817 -0.30328,-0.304153 -0.67917,-0.446246 -0.38,-0.150803 -0.80697,-0.130347 -0.41826,0.01635 -0.85375,0.221859 -0.43548,0.205513 -0.7227,0.522098 -0.27852,0.312475 -0.40368,0.701673 -0.12927,0.380488 -0.096,0.812059 0.042,0.427461 0.24339,0.854236 z'
                            id='path80666'
                        />
                        <path
                            d='m 126.63411,82.408652 2.47211,-0.594313 q 0.43074,-0.103555 0.87725,-0.141561 0.45361,-0.04962 0.84511,0.05437 0.38924,0.09462 0.6834,0.370587 0.29416,0.275964 0.42473,0.819078 0.13507,0.561841 -0.0933,1.012943 -0.22122,0.439486 -0.69797,0.72249 l 0.005,0.01873 q 0.339,-0.03197 0.63496,0.04546 0.30307,0.06581 0.54213,0.236161 0.24617,0.158734 0.41671,0.414891 0.17054,0.256158 0.24708,0.574535 0.12607,0.524386 -0.0131,0.934247 -0.14144,0.400498 -0.4455,0.701416 -0.30405,0.300917 -0.73101,0.502615 -0.4176,0.199445 -0.85771,0.305251 l -2.71557,0.652844 z m 2.09788,2.298835 1.05813,-0.254384 q 0.16855,-0.04052 0.31874,-0.116247 0.15955,-0.07798 0.27038,-0.19377 0.11084,-0.115793 0.15198,-0.274263 0.0505,-0.160721 0.003,-0.357366 -0.0495,-0.206009 -0.17469,-0.314593 -0.11804,-0.1202 -0.27651,-0.161344 -0.15847,-0.04115 -0.34314,-0.02646 -0.18692,0.0053 -0.35547,0.04584 l -0.99259,0.238626 z m 0.65959,2.743661 1.31097,-0.315166 q 0.16855,-0.04052 0.3281,-0.118499 0.16891,-0.08023 0.28686,-0.207636 0.11795,-0.127408 0.1662,-0.297494 0.0576,-0.172336 0.006,-0.387709 -0.0563,-0.2341 -0.21178,-0.345295 -0.14839,-0.122811 -0.34431,-0.15495 -0.19593,-0.03214 -0.40869,-0.01071 -0.21276,0.02143 -0.39068,0.06421 l -1.10496,0.26564 z'
                            id='path80668'
                        />
                        <path
                            d='m 133.89907,80.928409 1.49844,-0.109146 0.3946,5.417435 2.77596,-0.202199 0.10075,1.383175 -4.2744,0.311345 z'
                            id='path80670'
                        />
                        <path
                            d='m 140.15161,80.642955 4.61526,0.398458 -0.11929,1.3817 -3.11842,-0.269229 -0.10935,1.266558 2.94571,0.254318 -0.11929,1.3817 -2.94571,-0.254318 -0.11929,1.3817 3.29113,0.284139 -0.11929,1.3817 -4.78797,-0.41337 z'
                            id='path80672'
                        />
                        <path
                            d='m 147.62963,81.43735 2.16911,0.678925 0.16907,4.715221 0.0184,0.0058 2.83643,-3.774507 2.15991,0.676048 -2.03677,6.507321 -1.43382,-0.448781 1.5621,-4.990784 -0.0184,-0.0058 -3.27165,4.455699 -1.09375,-0.342339 -0.0831,-5.505732 -0.0184,-0.0058 -1.5621,4.990784 -1.43382,-0.448781 z'
                            id='path80674'
                        />
                        <path
                            d='m 162.35492,89.956476 q -0.022,-0.293981 -0.22585,-0.559836 -0.19047,-0.268434 -0.42178,-0.424962 -0.1356,-0.09176 -0.30076,-0.157007 -0.16516,-0.06525 -0.34136,-0.07982 -0.1708,-0.02255 -0.32612,0.03514 -0.15533,0.05769 -0.26328,0.217217 -0.17272,0.255238 -0.0731,0.520374 0.0997,0.265135 0.32205,0.555159 0.23035,0.295422 0.50058,0.617831 0.27023,0.322409 0.43863,0.692195 0.17638,0.375184 0.1681,0.799843 -0.008,0.42466 -0.34292,0.919185 -0.31845,0.470597 -0.73142,0.702806 -0.41297,0.232209 -0.87259,0.258415 -0.45165,0.0316 -0.92602,-0.126604 -0.4664,-0.15281 -0.90509,-0.449671 -0.55036,-0.372427 -0.90761,-0.858379 -0.35725,-0.485952 -0.51036,-1.136106 l 1.54386,-0.373978 q 0.0187,0.384779 0.20869,0.72266 0.20337,0.335303 0.51444,0.545805 0.15155,0.102552 0.32469,0.173199 0.18651,0.06807 0.35473,0.07724 0.1762,0.01457 0.32355,-0.04852 0.15532,-0.05769 0.25788,-0.20924 0.17271,-0.255239 0.0705,-0.533748 -0.0889,-0.281088 -0.31383,-0.584485 -0.22495,-0.303398 -0.49776,-0.639181 -0.27281,-0.335782 -0.44918,-0.710966 -0.17638,-0.375184 -0.18148,-0.797265 0.003,-0.416683 0.32134,-0.88728 0.30765,-0.454645 0.71522,-0.678877 0.41555,-0.218835 0.86719,-0.250439 0.45963,-0.02621 0.92603,0.126604 0.47179,0.144833 0.88656,0.425503 0.47857,0.323849 0.83348,0.761703 0.35491,0.437855 0.49794,0.999791 z'
                            id='path80676'
                        />
                        <path
                            d='m 163.42013,92.793577 q 0.58007,-0.577631 1.24123,-0.855449 0.66796,-0.270993 1.34211,-0.249141 0.68097,0.01506 1.3341,0.316074 0.65313,0.301019 1.21717,0.867442 0.56404,0.566422 0.8623,1.220815 0.29826,0.654393 0.31044,1.335422 0.019,0.674234 -0.26159,1.334217 -0.27381,0.666806 -0.85388,1.244437 -0.58007,0.57763 -1.24803,0.848623 -0.66116,0.277818 -1.34213,0.262762 -0.67415,-0.02185 -1.32727,-0.32287 -0.65313,-0.301019 -1.21717,-0.867441 -0.56404,-0.566423 -0.8623,-1.220816 -0.29827,-0.654392 -0.31727,-1.328626 -0.0122,-0.68103 0.26162,-1.347837 0.2806,-0.659982 0.86067,-1.237612 z m 1.1009,1.105547 q -0.34122,0.339783 -0.52591,0.727566 -0.17107,0.387811 -0.18555,0.796383 -0.008,0.401776 0.14816,0.790277 0.1626,0.395325 0.50239,0.736544 0.33978,0.341218 0.72762,0.498667 0.39463,0.164273 0.79644,0.15831 0.40863,-0.01276 0.79036,-0.189015 0.39536,-0.176227 0.73658,-0.51601 0.33439,-0.332987 0.51228,-0.727594 0.18469,-0.387783 0.19235,-0.789559 0.0145,-0.408572 -0.14813,-0.803897 -0.15581,-0.388501 -0.49559,-0.72972 -0.33978,-0.341218 -0.73442,-0.505491 -0.38784,-0.157449 -0.79647,-0.14469 -0.40181,0.006 -0.79716,0.18219 -0.38856,0.183052 -0.72295,0.516039 z'
                            id='path80678'
                        />
                        <path
                            d='m 172.33749,97.480533 0.8587,1.232825 -4.45714,3.104552 1.59081,2.28389 -1.13799,0.79265 -2.44951,-3.51672 z'
                            id='path80680'
                        />
                        <path
                            d='m 175.00293,101.29073 0.74599,1.54347 -3.28999,3.46205 0.008,0.0173 4.7694,-0.40114 0.69989,1.44808 -7.36293,0.43523 -0.52387,-1.0839 z'
                            id='path80682'
                        />
                        <path
                            d='m 178.55575,109.3014 1.21551,4.47012 -1.33825,0.36389 -0.82128,-3.02035 -1.22673,0.33357 0.7758,2.85307 -1.33825,0.36389 -0.7758,-2.85306 -1.33825,0.36389 0.86678,3.18763 -1.33825,0.36389 -1.26099,-4.63739 z'
                            id='path80684'
                        />
                        <path
                            d='m 180.2348,116.32697 0.23488,2.62837 q 0.0463,0.518 -0.0181,0.98788 -0.0539,0.47861 -0.26288,0.84537 -0.19851,0.3755 -0.58339,0.61295 -0.37444,0.24618 -0.96918,0.29933 -0.71945,0.0643 -1.26129,-0.26438 -0.53224,-0.32954 -0.73083,-1.03698 l -2.71389,1.98297 -0.1603,-1.79381 2.58784,-1.6623 -0.066,-0.73863 -2.71471,0.24259 -0.13372,-1.49645 z m -2.67691,1.74761 0.0789,0.88252 q 0.018,0.20145 0.0473,0.42122 0.0398,0.22851 0.12319,0.40477 0.093,0.1754 0.2568,0.27679 0.16462,0.11099 0.44281,0.0861 0.259,-0.0231 0.40305,-0.14238 0.14405,-0.11923 0.20622,-0.28916 0.0718,-0.17079 0.0817,-0.3844 0.01,-0.21361 -0.008,-0.41505 l -0.0874,-0.97845 z'
                            id='path80686'
                        />
                    </g>
                </m.g>
            </g>
        </svg>
    );
}
