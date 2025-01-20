import React from 'react';
import './App.css';
import Header from './Header/Header';
import MobileHeader from './Header/Header-mob';
import MainSection from './Main/Main';
import ResponsiveHeader from './sch-Header';
import Footer from './Footer/Footer';



export default function App() {



  return (
    <div className='flex flex-col items-center justify-center '>
      <svg className="hidden">
        <symbol id="Logo" viewBox="0 0 41 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.0569 0.00102901C15.8613 0.0126934 15.8027 0.0176935 15.674 0.0343571C15.4845 0.0585203 15.2824 0.0993471 15.1012 0.150173C15.022 0.172669 14.8408 0.233077 14.842 0.236826C14.8429 0.238493 14.8867 0.269738 14.94 0.305983C15.7966 0.89131 16.5075 1.62953 17.0643 2.51065C17.5801 3.32635 17.984 4.26329 18.353 5.50019C18.5023 6.00053 18.6191 6.43713 18.8655 7.41823C19.1456 8.53264 19.2612 8.96383 19.4277 9.51374C19.4834 9.69663 19.6007 10.0578 19.6548 10.2116C19.7635 10.5215 19.9078 10.8923 20.0128 11.1302L20.023 11.1531L20.0275 11.1364C20.03 11.1272 20.0439 11.0718 20.0587 11.0131C20.2415 10.2732 20.2645 9.49458 20.13 8.56389C20.0693 8.14145 19.9984 7.78817 19.8004 6.91414C19.6778 6.37339 19.6511 6.25216 19.5991 5.99345C19.4437 5.22565 19.376 4.60574 19.3863 4.04999C19.3879 3.96042 19.3904 3.87252 19.3916 3.85461L19.3945 3.82128L20.2961 6.97288C20.7918 8.70595 21.1981 10.1249 21.1989 10.1257C21.2002 10.127 25.9764 7.36574 25.9826 7.36032C25.9863 7.35657 25.8243 7.02621 25.7558 6.89748C24.6566 4.83487 22.6098 2.71936 20.4207 1.38332C19.294 0.695506 18.1833 0.249741 17.1681 0.0781002C16.9676 0.0439386 16.7859 0.0226927 16.5633 0.00644493C16.503 0.00227833 16.109 -0.00188732 16.0569 0.00102901Z" />
          <path d="M12.3077 2.06948C11.9386 2.09322 11.5717 2.22154 11.2437 2.44192C10.7783 2.75479 10.3908 3.2593 10.1219 3.90336C10.0218 4.14291 9.89143 4.53618 9.80041 4.87488C9.59991 5.62018 9.46256 6.43839 9.35595 7.52448C9.31823 7.90692 9.29363 8.19979 9.23254 8.99509C9.17186 9.78621 9.13741 10.182 9.09682 10.5678C9.08575 10.6723 9.08124 10.7327 9.08247 10.7498C9.09108 10.839 9.15545 10.9469 9.2883 11.0948C9.3129 11.1223 9.40228 11.216 9.48675 11.3031C9.65198 11.473 9.72497 11.5522 9.79385 11.6338C9.81763 11.6626 9.84141 11.6905 9.84633 11.6963C9.85494 11.7063 9.85535 11.7068 9.85576 11.6988C9.85576 11.6938 9.97467 10.404 10.1202 8.83261C10.2658 7.26077 10.4081 5.72142 10.4368 5.4123C10.465 5.10276 10.4888 4.84947 10.4888 4.84947C10.4892 4.84905 10.5639 4.86072 10.6553 4.8753C10.7467 4.88988 10.8218 4.90196 10.8222 4.90196C10.823 4.90196 10.8238 6.35632 10.8242 8.13355L10.8254 11.3656L11.8136 11.6247C16.4259 12.8357 17.6592 13.1594 17.6604 13.1582C17.6608 13.1574 17.6403 13.052 17.6153 12.9237C17.5899 12.7953 17.5366 12.5133 17.4964 12.2967C17.334 11.4147 17.2844 11.161 17.2008 10.7931C17.1262 10.4649 17.0716 10.2557 16.9654 9.89495C16.8441 9.48168 16.7846 9.27129 16.5124 8.28478C16.1151 6.84541 15.8797 6.09178 15.5857 5.32065C15.343 4.68283 15.0347 4.01876 14.8055 3.63965C14.5714 3.25263 14.2848 2.9131 13.9797 2.66189C13.4664 2.23903 12.8845 2.03282 12.3077 2.06948Z" />
          <path d="M32.5251 8.19719C31.3365 8.23593 30.0941 8.43799 28.8083 8.80126C26.1625 9.54907 23.6544 10.8889 21.9081 12.4878C21.7072 12.6715 21.3747 13.0035 21.2156 13.1789C20.7806 13.6584 20.4489 14.1021 20.1619 14.5879C20.1447 14.6166 20.1315 14.6404 20.1324 14.6412C20.1328 14.642 20.1574 14.6404 20.1861 14.6379C20.6736 14.5954 21.1357 14.4437 21.6802 14.1471C22.1849 13.8726 22.8778 13.4789 24.007 12.8244C24.9312 12.2891 25.2276 12.1183 25.604 11.9041C27.2474 10.9693 28.468 10.3423 29.6283 9.83652C30.4352 9.48491 31.1897 9.30285 32.0556 9.25119C32.2619 9.2387 32.6329 9.24161 32.8675 9.25786C33.7814 9.31993 34.6846 9.56073 35.5777 9.98025C35.6273 10.0036 35.6691 10.024 35.6707 10.0252C35.6724 10.0269 35.51 10.0273 35.3099 10.0269C34.1139 10.0223 33.006 10.0886 31.8793 10.2327C28.32 10.6872 25.2699 11.8904 23.1562 13.673C22.8934 13.8947 22.7015 14.0717 22.46 14.315C22.23 14.5462 22.0627 14.7295 21.8667 14.9649C21.772 15.0786 21.5428 15.3728 21.5145 15.4173L21.508 15.4282L21.5559 15.4652C21.6322 15.5236 21.804 15.6644 21.9139 15.7581C22.2079 16.0081 22.4506 16.2301 23.0312 16.7792C23.7553 17.4641 24.0595 17.7366 24.4314 18.0336C25.2166 18.6606 25.8808 18.9864 26.5163 19.0555C26.6738 19.0726 26.9517 19.0751 27.1149 19.0605C27.807 18.9985 28.5561 18.7468 29.493 18.2627C29.8784 18.0636 30.2462 17.8557 30.8666 17.4874C31.0043 17.4058 31.2208 17.2771 31.3483 17.2012C31.915 16.8646 32.1491 16.7317 32.6173 16.4813C33.9782 15.7531 34.7117 15.3165 35.4046 14.822C35.8897 14.4754 36.2673 14.1638 36.6535 13.7905C37.1952 13.2668 37.5498 12.7352 37.7364 12.1674C37.8073 11.952 37.845 11.775 37.8676 11.5467C37.875 11.4759 37.8774 11.2576 37.8721 11.178C37.85 10.851 37.7725 10.5589 37.6298 10.2656C37.4527 9.9011 37.1915 9.57906 36.8426 9.29494C36.1808 8.75585 35.2689 8.41424 34.0967 8.26635C33.856 8.23593 33.6215 8.21635 33.3062 8.20094C33.1926 8.19552 32.6579 8.19302 32.5251 8.19719Z" />
          <path d="M40.4392 12.7135C40.3539 12.9144 40.285 13.0668 40.203 13.2368C39.5638 14.5612 38.6827 15.6723 37.5252 16.6134C36.6568 17.3195 35.6469 17.9344 34.2783 18.5902C33.7473 18.8447 33.3295 19.0326 32.1483 19.5475C30.8297 20.1224 30.3155 20.359 29.6513 20.6961C29.0912 20.9802 28.641 21.2331 28.1937 21.5139C28.1395 21.5476 28.0944 21.5759 28.094 21.5768C28.0932 21.5772 28.1059 21.5943 28.1227 21.6147C28.1621 21.6626 28.2318 21.7543 28.3355 21.893C28.4905 22.1013 28.5516 22.1671 28.5828 22.1604C28.5951 22.1579 29.0994 21.9542 30.1474 21.528C31.8715 20.8273 33.1253 20.312 36.2751 19.0093C36.9541 18.7285 37.5113 18.4981 37.5133 18.4972C37.517 18.4956 37.6298 18.6922 37.6335 18.706C37.6343 18.7101 36.7433 19.1671 31.1712 22.0205C30.1568 22.54 29.3261 22.9657 29.3249 22.9666C29.3241 22.9678 29.6628 23.8552 30.0773 24.9388C30.4918 26.0223 31.0384 27.4505 31.2913 28.1129C31.5447 28.7748 31.7534 29.3185 31.7551 29.3206C31.7596 29.326 31.8116 29.3014 32.0335 29.1894C32.5345 28.9365 32.974 28.6782 33.4624 28.3503C35.2135 27.1751 36.8577 25.5112 38.1734 23.5823C39.8275 21.1573 40.8353 18.496 40.9821 16.1668C40.9948 15.9656 40.9968 15.8989 40.9993 15.6564C41.0026 15.3077 40.9927 15.0624 40.9632 14.7545C40.8992 14.0896 40.7533 13.4626 40.5298 12.8923C40.4933 12.7998 40.4523 12.7006 40.449 12.6969C40.4478 12.6961 40.4437 12.7036 40.4392 12.7135Z" />
          <path d="M8.4373 13.6302C8.0855 13.641 7.72961 13.6685 7.39135 13.711C5.44582 13.9568 3.7463 14.738 2.2682 16.0653C2.07713 16.2369 1.83891 16.4669 1.68762 16.626L1.59741 16.721H1.63554C1.73149 16.721 2.14724 16.7335 2.39366 16.7439C3.99436 16.8118 4.97635 17.0147 5.9936 17.488C6.11743 17.5455 6.39378 17.6863 6.52047 17.7567C6.97682 18.0095 7.44998 18.3124 8.05188 18.7369C9.83586 19.9955 10.7457 20.7141 11.6293 21.5636C11.783 21.7115 12.455 22.3985 12.9905 22.9555C13.5592 23.547 14.0152 24.0278 14.9996 25.0739C15.0697 25.1485 15.4248 25.5271 15.7889 25.9154C17.6356 27.8855 18.3314 28.6192 19.2765 29.5919C20.1006 30.4397 21.2392 31.5758 21.632 31.942C22.6255 32.8677 23.9023 33.6563 25.2254 34.1612C25.6227 34.3129 26.0536 34.4475 26.307 34.4995C26.7092 34.5816 27.0885 34.5874 27.4415 34.5179C28.0996 34.3875 28.6334 33.9967 28.9709 33.3972C29.1652 33.0518 29.2927 32.6269 29.3374 32.1749C29.3534 32.0132 29.3543 31.992 29.3538 31.6333C29.3538 31.2171 29.3456 30.9263 29.3235 30.5147C29.2382 28.9512 28.9807 27.7001 28.5383 26.6966C28.4141 26.4149 28.0943 25.7842 27.8339 25.3072C26.5087 22.8801 24.8884 20.8129 22.9867 19.1248C21.3815 17.6996 19.5795 16.5431 17.5806 15.6557C15.574 14.7646 13.3714 14.1464 10.9814 13.8031C10.2291 13.6948 9.71901 13.6477 9.11587 13.6298C8.9572 13.6252 8.59843 13.6252 8.4373 13.6302ZM10.4382 15.0921C10.9101 15.1083 11.3611 15.1496 11.8343 15.2196C13.8466 15.5174 16.0123 16.3106 18.1608 17.5367C21.0318 19.1752 23.6784 21.4915 25.5046 23.9636C26.7236 25.6138 27.5297 27.2656 27.8634 28.7983C28.0643 29.7207 28.0926 30.5972 27.9479 31.4004C27.929 31.5041 27.902 31.6354 27.8987 31.6391C27.8975 31.64 27.8966 31.6337 27.8966 31.6245C27.8966 31.5737 27.8798 31.3108 27.8675 31.175C27.7589 29.9465 27.4091 28.675 26.8265 27.3902C25.553 24.5815 23.2262 21.844 20.2663 19.6722C19.0588 18.7861 17.7492 18.0012 16.4154 17.3642C13.9245 16.1748 11.3488 15.4799 8.82886 15.317C8.60499 15.3029 8.27575 15.2879 8.17899 15.2879C8.14905 15.2879 8.12978 15.2862 8.13183 15.2841C8.13675 15.2795 8.3188 15.2446 8.46641 15.2191C8.86658 15.1512 9.30448 15.1075 9.7309 15.0925C9.86907 15.0875 10.3029 15.0875 10.4382 15.0921Z" />
          <path d="M2.23171 19.8562C1.47605 19.8971 0.892187 20.187 0.504722 20.7149C0.421079 20.829 0.356296 20.9382 0.289874 21.0765C0.131608 21.4085 0.0418141 21.7772 0.0073728 22.2388C-7.48572e-06 22.3334 -0.00246758 22.6391 0.00286262 22.7512C0.0717453 24.2039 0.370647 25.6129 0.851595 26.7493C0.962299 27.0114 1.16854 27.4351 1.39856 27.8733C2.33708 29.6622 3.44699 31.267 4.72624 32.6851C5.0805 33.078 5.54136 33.5491 5.9239 33.9103C7.55043 35.4447 9.40944 36.7128 11.4899 37.7081C13.2004 38.5263 15.055 39.16 17.0677 39.6136C17.8504 39.7899 18.5942 39.9053 19.3109 39.9611C19.7131 39.9923 20.0231 40.0027 20.4303 39.9994C20.7029 39.9969 20.7878 39.9944 21.0063 39.9819C22.2925 39.9082 23.4968 39.6207 24.6247 39.1187C24.9158 38.9891 25.2586 38.8146 25.5411 38.6517C25.9884 38.3947 26.4718 38.0668 26.8581 37.7585L26.8917 37.7314L26.69 37.7289C26.3037 37.7239 25.9868 37.6998 25.6334 37.6485C23.9982 37.4123 22.484 36.6632 20.9694 35.3414C20.6045 35.0227 20.2724 34.7031 19.8202 34.2349C19.3548 33.7533 19.0137 33.3842 18.1608 32.4393C16.9874 31.1395 16.6343 30.7646 15.8524 29.988C13.9676 28.1162 13.5096 27.6625 12.8532 27.0172C10.8014 24.9992 9.19747 23.4865 7.67877 22.1384C7.38848 21.8805 7.25727 21.7655 7.18265 21.7035C6.61683 21.2319 5.90914 20.8278 5.06697 20.4945C4.61349 20.3149 4.07719 20.1458 3.58066 20.025C3.17515 19.9266 2.95785 19.8879 2.67043 19.8641C2.59662 19.8579 2.30059 19.8525 2.23171 19.8562ZM2.25631 21.0431C2.47649 21.1127 2.71676 21.1769 3.17269 21.2889C3.80043 21.4427 4.10507 21.5306 4.39864 21.6418C4.75167 21.7759 4.99808 21.9093 5.26582 22.1109C8.03015 24.1939 9.97527 25.8187 11.6067 27.4084C12.2152 28.0017 13.1799 28.9907 14.0303 29.8939C15.0894 31.0187 15.9394 31.9502 17.9927 34.2349C19.1928 35.5701 19.7779 36.2175 20.336 36.8274C20.4339 36.9349 20.5147 37.024 20.5155 37.0257C20.5164 37.0282 20.3458 37.1998 20.1264 37.4169L20.083 37.4598L19.8005 37.1523C19.2572 36.5616 18.8685 36.1358 17.8246 34.991C15.866 32.843 15.0062 31.9086 14.0156 30.8521C12.7867 29.5414 11.5485 28.2616 10.6145 27.3355C9.27332 26.0061 8.106 24.9521 6.96739 24.0427C6.73286 23.8552 6.51432 23.6952 6.23141 23.5036C5.76686 23.1891 5.37735 22.9528 4.38429 22.3846C3.53351 21.8976 3.14809 21.6676 2.71963 21.391C2.55111 21.2819 2.18579 21.0348 2.17021 21.0194C2.16529 21.0144 2.15955 21.0127 2.25631 21.0431Z" />
        </symbol>
        <symbol id='Logo-Type' viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M7.22937 0.610531C4.44214 1.47319 2.66845 3.11226 1.2326 6.17471C-1.55463 12.1271 0.514679 18.0795 6.13137 20.2361C8.49629 21.0988 14.7887 21.487 15.8867 20.7537C16.1401 20.5812 16.3934 18.9421 16.4779 16.8717C16.6468 12.5584 16.4779 12.3859 12.5504 12.5584C9.76321 12.6878 9.00306 13.3348 10.6923 14.1112C11.917 14.6719 12.4237 16.2247 12.0437 17.9069C11.7903 18.8559 11.5791 18.9853 10.6078 18.7265C7.35606 17.9069 6.13137 15.7934 6.13137 10.9625C6.08914 8.11571 6.30029 7.20991 7.10267 5.74338C9.00306 2.29272 5.28675 2.55152 53.2186 2.55152C83.9626 2.55152 96.1251 2.68092 96.5474 3.02599C97.1808 3.58672 97.3498 13.3348 96.7163 13.3348C96.5051 13.3348 94.9848 11.4801 93.3378 9.23717L90.3395 5.13951H87.8056C86.412 5.13951 85.2718 5.22578 85.2718 5.35518C85.2718 5.48458 85.5674 6.04531 85.9475 6.60604C86.4542 7.46871 86.5387 8.71957 86.412 13.4211C86.3275 16.5698 86.1164 19.5891 85.9475 20.1499C85.6096 21.0988 85.6518 21.1419 87.2144 21.0125L88.8614 20.8831L88.9881 16.4404C89.0303 14.025 89.2837 12.0408 89.4948 12.0408C89.6638 12.0408 91.0996 13.9818 92.6199 16.3541C95.4494 20.7969 96.1251 21.3145 98.6167 21.0125L99.8414 20.8831L99.9681 11.8683C100.095 1.68886 99.9681 1.2144 97.2231 0.437998C96.1673 0.136066 81.1754 -0.0364666 52.3318 0.00666618C17.4492 0.00666618 8.70744 0.136066 7.22937 0.610531Z" />
          <path d="M24.0797 5.13955C22.1371 5.61401 19.3921 7.64127 18.3785 9.40973C17.8718 10.3587 17.5762 11.6958 17.5339 13.3349C17.4917 15.4052 17.7029 16.0522 18.7164 17.3894C20.2789 19.4598 21.9682 20.5381 24.8398 21.142C29.3585 22.0909 34.384 20.193 36.1577 16.8718C39.5784 10.5312 35.3553 4.57882 27.5426 4.75135C26.4446 4.79448 24.8821 4.96702 24.0797 5.13955ZM29.5697 7.85694C29.9498 8.15887 30.6677 9.06467 31.1745 9.8842C34.0461 14.7151 29.1896 21.2714 25.1355 18.0364C22.1371 15.6209 21.9259 11.0057 24.7132 8.37454C25.9801 7.16681 28.3872 6.95114 29.5697 7.85694Z" />
          <path d="M52.9652 12.9466V21.1851L58.2441 21.0125C64.3253 20.7969 66.3524 20.0636 68.1683 17.3462C69.5197 15.2758 69.6463 11.2644 68.4217 9.19403C66.4368 5.87278 63.4807 4.75132 56.9771 4.70818H52.9652V12.9466ZM62.7205 8.7627C64.0297 10.0998 64.1564 10.488 64.1564 12.6447C64.1564 16.6561 62.7627 18.5108 59.7644 18.5108H58.2441V13.2054C58.2441 10.2724 58.3707 7.72751 58.5397 7.59811C59.2998 6.77858 61.3691 7.38244 62.7205 8.7627Z" />
          <path d="M71.2508 12.3426C71.3353 16.5696 71.462 20.2791 71.5465 20.5379C71.6731 20.9692 73.2357 21.0986 77.4165 21.0986C82.8221 21.0986 83.1599 21.0555 83.7511 20.1497C84.6802 18.7694 84.638 17.4323 83.7089 17.9068C83.2866 18.1224 81.6396 18.295 79.9926 18.295H77.0364V16.1383V13.9817L79.0213 13.8523C80.4994 13.766 81.2173 13.4641 81.6818 12.7739C82.0197 12.2563 82.3153 11.6956 82.3153 11.5231C82.3153 11.3505 81.1328 11.178 79.697 11.0917L77.0364 10.9623L76.9098 9.40954C76.7408 7.20975 77.501 6.64902 80.0771 7.25288C81.8085 7.64108 82.1886 7.59795 82.6531 6.99408C82.9065 6.60588 83.1599 5.91575 83.1599 5.48442C83.1599 4.75116 82.6531 4.70802 77.1631 4.70802H71.1241L71.2508 12.3426Z" />
          <path d="M39.1559 12.5583C39.2403 16.8284 39.4937 20.236 39.7471 20.5379C40.0427 20.9261 41.6052 21.0986 44.6881 21.0986C49.4602 21.0986 50.347 20.7967 50.7271 19.1145C50.9382 18.2087 50.8115 18.1656 47.9399 18.2518L44.9415 18.295V11.6956V5.13935H41.9853H39.0292L39.1559 12.5583Z" />
          <path d="M4.31542 24.2908C2.11942 25.3691 0.683576 27.0513 0.134577 29.208C-0.287731 30.847 0.387961 34.7721 1.35927 36.2387C3.13296 38.9129 7.65165 40.25 13.0572 39.7756C15.5066 39.5168 15.6755 39.4736 16.2667 38.0071C16.6046 37.1876 16.7735 36.4112 16.689 36.2818C16.5623 36.1955 15.591 36.4112 14.493 36.7994C12.0436 37.6621 10.3966 37.6621 8.91857 36.8857C6.25803 35.4623 4.94888 32.788 5.54011 30.0275C6.46919 25.671 9.08749 24.5496 13.6062 26.4906C14.2819 26.7925 14.3663 26.62 14.2396 25.1534L14.1129 23.4712L10.3122 23.3418C7.01819 23.2556 6.2158 23.385 4.31542 24.2908Z" />
          <path d="M24.9239 23.9024C20.363 25.1964 17.7447 28.7333 18.2515 33.0035C18.7583 37.6187 23.108 40.4224 29.2315 39.9479C35.735 39.5166 39.7047 33.823 37.382 28.302C35.7772 24.42 30.1183 22.4359 24.9239 23.9024ZM31.0896 27.353C32.5255 29.0352 33.0745 31.3644 32.5255 33.4779C31.0896 38.9559 25.2196 38.8265 23.5726 33.2192C22.0945 28.1726 27.8801 23.6436 31.0896 27.353Z" />
          <path d="M40.0431 23.5574C40.0008 23.7731 40.0431 24.075 40.1275 24.3338C40.212 24.5495 40.3809 28.0432 40.5076 32.0978L40.7187 39.4304L43.4637 39.5598L46.251 39.6892L46.2087 36.1092V32.5291L48.4047 32.3997C50.6852 32.2703 51.7832 31.4939 51.3187 30.3724C51.1497 29.898 50.4318 29.7254 48.5314 29.7254H45.9976V27.8276C45.9976 25.4984 46.6311 25.1533 49.6294 25.8435C51.4454 26.2748 51.741 26.2317 52.2477 25.5415C52.5434 25.1102 52.7123 24.5063 52.67 24.1181C52.5434 23.6005 51.4876 23.4711 46.2932 23.3417C42.8725 23.2986 40.0431 23.3849 40.0431 23.5574Z" />
          <path d="M55.2453 23.5574C55.2031 23.7731 55.2453 24.075 55.3298 24.3338C55.4143 24.5495 55.5832 28.0432 55.7099 32.0978L55.921 39.4304L58.666 39.5598L61.4532 39.6892L61.411 36.1092V32.5291L63.607 32.3997C65.8875 32.2703 66.9855 31.4939 66.5209 30.3724C66.352 29.898 65.6341 29.7254 63.7337 29.7254H61.1999V27.8276C61.1999 25.4984 61.8333 25.1533 64.8317 25.8435C66.6476 26.2748 66.9432 26.2317 67.45 25.5415C67.7456 25.1102 67.9145 24.5063 67.8723 24.1181C67.7456 23.6005 66.6899 23.4711 61.4955 23.3417C58.0748 23.2986 55.2453 23.3849 55.2453 23.5574Z" />
          <path d="M70.4486 23.5576C70.4064 23.7732 70.4486 24.0752 70.4909 24.334C70.5753 24.5496 70.5753 27.8709 70.5753 31.6235C70.5331 36.0231 70.702 38.7404 70.9976 39.0855C71.3355 39.5168 72.9403 39.6462 77.0789 39.6462H82.7378L83.4557 38.1366C84.3426 36.2819 84.0469 35.9368 82.3155 36.8426C81.4709 37.2739 80.2462 37.4896 78.8103 37.4033L76.6143 37.2739L76.4876 34.7722L76.3609 32.3136H78.4303C80.584 32.3136 81.4709 31.796 81.4709 30.502C81.4709 29.855 81.0908 29.7256 78.8948 29.7256H76.3609L76.4876 27.6552C76.6143 25.4123 76.8677 25.2829 80.2884 25.973C81.6398 26.275 81.9354 26.1887 82.3155 25.4123C83.329 23.4713 82.78 23.2556 76.4032 23.2556C73.1514 23.2556 70.4486 23.385 70.4486 23.5576Z" />
          <path d="M86.4542 30.4589C86.4964 34.4703 86.6654 38.1366 86.7498 38.6542C86.961 39.6462 87.0877 39.6462 92.9155 39.6462H98.8278L99.4613 38.1366C100.264 36.1093 100.264 36.1093 98.5322 36.8426C96.674 37.619 93.1267 37.7052 92.5777 36.9288C92.3665 36.6701 92.2398 35.7211 92.282 34.9016C92.3243 34.0821 92.4087 33.1331 92.4087 32.8312C92.451 32.4861 93.1689 32.3136 94.5203 32.3136C96.674 32.3136 97.8143 31.5372 97.392 30.4157C97.223 29.9844 96.3784 29.7256 94.6892 29.6393L92.2398 29.5099L92.1131 27.9571C91.9442 25.7142 92.7044 25.1966 95.4494 25.8005C97.392 26.2318 97.6876 26.1887 98.1944 25.5417C98.5322 25.1104 98.7434 24.4634 98.6589 24.1183C98.5744 23.6007 97.4764 23.4713 92.451 23.3419L86.3275 23.2125L86.4542 30.4589Z" />
        </symbol>

        <symbol id="Mob-Cart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19" className="stroke-brown-950 dark:stroke-orange-200" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path opacity="0.5" d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" className="stroke-brown-950 dark:stroke-orange-200" stroke-width="0.8399999999999999"></path> <path opacity="0.5" d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" className="stroke-brown-950 dark:stroke-orange-200" stroke-width="0.8399999999999999"></path> <path d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5" className="stroke-brown-950 dark:stroke-orange-200" stroke-width="0.8399999999999999"></path> </g></symbol>
        <symbol id="Cart" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M2 3L2.26491 3.0883C3.58495 3.52832 4.24497 3.74832 4.62248 4.2721C5 4.79587 5 5.49159 5 6.88304V9.5C5 12.3284 5 13.7426 5.87868 14.6213C6.75736 15.5 8.17157 15.5 11 15.5H19" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path opacity="0.5" d="M7.5 18C8.32843 18 9 18.6716 9 19.5C9 20.3284 8.32843 21 7.5 21C6.67157 21 6 20.3284 6 19.5C6 18.6716 6.67157 18 7.5 18Z" stroke-width="0.8399999999999999"></path> <path opacity="0.5" d="M16.5 18.0001C17.3284 18.0001 18 18.6716 18 19.5001C18 20.3285 17.3284 21.0001 16.5 21.0001C15.6716 21.0001 15 20.3285 15 19.5001C15 18.6716 15.6716 18.0001 16.5 18.0001Z" stroke-width="0.8399999999999999"></path> <path d="M5 6H16.4504C18.5054 6 19.5328 6 19.9775 6.67426C20.4221 7.34853 20.0173 8.29294 19.2078 10.1818L18.7792 11.1818C18.4013 12.0636 18.2123 12.5045 17.8366 12.7523C17.4609 13 16.9812 13 16.0218 13H5" stroke-width="0.8399999999999999"></path> </g></symbol>
        <symbol id="Moon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3.32031 11.6835C3.32031 16.6541 7.34975 20.6835 12.3203 20.6835C16.1075 20.6835 19.3483 18.3443 20.6768 15.032C19.6402 15.4486 18.5059 15.6834 17.3203 15.6834C12.3497 15.6834 8.32031 11.654 8.32031 6.68342C8.32031 5.50338 8.55165 4.36259 8.96453 3.32996C5.65605 4.66028 3.32031 7.89912 3.32031 11.6835Z" stroke="#fed7aa" stroke-width="0.8399999999999999" stroke-linecap="round" stroke-linejoin="round"></path> </g></symbol>
        <symbol id='Sun' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M7.28451 10.3333C7.10026 10.8546 7 11.4156 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C11.4156 7 10.8546 7.10026 10.3333 7.28451" stroke="#fed7aa" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M12 2V4" stroke="#fed7aa" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M12 20V22" stroke="#fed7aa" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M4 12L2 12" stroke="#fed7aa" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M22 12L20 12" stroke="#fed7aa" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M19.7778 4.22266L17.5558 6.25424" stroke="#fed7aa" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M4.22217 4.22266L6.44418 6.25424" stroke="#fed7aa" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M6.44434 17.5557L4.22211 19.7779" stroke="#fed7aa" stroke-width="0.8399999999999999" stroke-linecap="round"></path> <path d="M19.7778 19.7773L17.5558 17.5551" stroke="#fed7aa" stroke-width="0.8399999999999999" stroke-linecap="round"></path> </g></symbol>
        <symbol id="Login" viewBox="0 0 24.00 24.00" fill='none' xmlns="http://www.w3.org/2000/svg" transform="rotate(0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.336"></g><g id="SVGRepo_iconCarrier"> <path d="M2.00098 11.999L16.001 11.999M16.001 11.999L12.501 8.99902M16.001 11.999L12.501 14.999" stroke-width="0.8399999999999999" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M9.00195 7C9.01406 4.82497 9.11051 3.64706 9.87889 2.87868C10.7576 2 12.1718 2 15.0002 2L16.0002 2C18.8286 2 20.2429 2 21.1215 2.87868C22.0002 3.75736 22.0002 5.17157 22.0002 8L22.0002 16C22.0002 18.8284 22.0002 20.2426 21.1215 21.1213C20.2429 22 18.8286 22 16.0002 22H15.0002C12.1718 22 10.7576 22 9.87889 21.1213C9.11051 20.3529 9.01406 19.175 9.00195 17" stroke-width="0.8399999999999999" stroke-linecap="round"></path> </g></symbol>
        <symbol id='Hum-Menu' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4 6H20M4 12H20M4 18H20" className="stroke-brown-950 dark:stroke-orange-200" stroke-width="1.224" stroke-linecap="round" stroke-linejoin="round"></path> </g></symbol>
        <symbol id='About-Us' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><g data-name="Coffee cup"><path d="M58 18h-3v6h2v7a3.988 3.988 0 0 1-2.65 3.76A17.932 17.932 0 0 1 51.24 41H53a10.017 10.017 0 0 0 10-10v-8a5.002 5.002 0 0 0-5-5zM6.91 42.11c.27-.11.53-.21.77-.3a4.431 4.431 0 0 0 2.34-1.57 4.392 4.392 0 0 0 1.05-2.59 6.437 6.437 0 0 1 1.49-3.58 6.237 6.237 0 0 1 2.98-2.11c-2.155-.98-4.753.026-6.5 1.6-2.423 2.271-3.74 5.982-2.13 8.55zM16.54 40.32c1.56-2.33 1.8-5.06.68-6.86-.27.11-.53.21-.77.3a4.375 4.375 0 0 0-2.33 1.57 4.458 4.458 0 0 0-1.07 2.6 6.338 6.338 0 0 1-1.48 3.57 6.281 6.281 0 0 1-3 2.12c2.595 1.205 6.108-.508 7.97-3.3z" /><path d="M19.01 40H37a10.017 10.017 0 0 0 10-10v-6.92a5.046 5.046 0 0 0-1.83.78 7.054 7.054 0 0 1-7.69 0 5.07 5.07 0 0 0-5.65 0 7.037 7.037 0 0 1-7.68 0 4.658 4.658 0 0 0-2.82-.86 4.603 4.603 0 0 0-2.81.86A6.69 6.69 0 0 1 14.66 25a6.617 6.617 0 0 1-3.84-1.14A5.072 5.072 0 0 0 9 23.08c0 7.17-.028 7.052.05 7.96 2.299-1.452 5.469-2.065 7.81-.66 3.277 1.802 3.785 6.117 2.15 9.62z" /><path d="M7.27 32.5A11.671 11.671 0 0 1 7 30v-8a1.003 1.003 0 0 1 1-1 6.617 6.617 0 0 1 3.84 1.14 4.658 4.658 0 0 0 2.82.86 4.69 4.69 0 0 0 2.83-.86A6.617 6.617 0 0 1 21.33 21a6.617 6.617 0 0 1 3.84 1.14 4.658 4.658 0 0 0 2.82.86 4.603 4.603 0 0 0 2.81-.86A6.69 6.69 0 0 1 34.66 21a6.617 6.617 0 0 1 3.84 1.14 5.07 5.07 0 0 0 5.65 0A6.628 6.628 0 0 1 48 21a1.003 1.003 0 0 1 1 1v8a12.01 12.01 0 0 1-12 12c-18.843 0-18.227.038-19.16-.06A10.562 10.562 0 0 1 15.82 44h28.91A16.019 16.019 0 0 0 53 30V14a1.003 1.003 0 0 0-1-1H4a1.003 1.003 0 0 0-1 1v16a15.977 15.977 0 0 0 1.59 6.95 10.78 10.78 0 0 1 2.68-4.45zM54 46H2a1 1 0 0 0-1 1 4 4 0 0 0 4 4h46a4 4 0 0 0 4-4 1 1 0 0 0-1-1z" /></g></symbol>
        <symbol id='Shop' viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve">  <path d="M34 34.747c0-.339.275-.614.614-.614h8.772c.339 0 .614.275.614.614V50H34V34.747zM55 34.991a.858.858 0 0 0-.857-.858h-6.352a.858.858 0 0 0-.858.858v6.285c0 .473.384.857.858.857h6.352a.857.857 0 0 0 .857-.857v-6.285zM44 40.356h2.933M44 36.444h2.933M51.2 37.333 50.133 38.4M50.769 13.394a4.5 4.5 0 0 0-4.137-2.727H17.368a4.5 4.5 0 0 0-4.137 2.727L8 25.6h48l-5.231-12.206zM17.067 25.6H9.6v1.465a2.802 2.802 0 0 0 2.801 2.802h1.864c.743 0 1.456-.295 1.981-.821a2.799 2.799 0 0 0 .821-1.981V25.6z" />  <path d="M24.533 25.6h-7.466v1.465a2.802 2.802 0 0 0 2.801 2.802h1.864a2.8 2.8 0 0 0 2.801-2.802V25.6z" />  <path d="M32 25.6h-7.467v1.465c0 .743.295 1.456.821 1.981a2.799 2.799 0 0 0 1.981.821h1.864A2.8 2.8 0 0 0 32 27.065V25.6z" />  <path d="M39.467 25.6H32v1.465a2.802 2.802 0 0 0 2.801 2.802h1.864c.743 0 1.456-.295 1.981-.821a2.799 2.799 0 0 0 .821-1.981V25.6z" />  <path d="M46.933 25.6h-7.466v1.465a2.802 2.802 0 0 0 2.801 2.802h1.864a2.8 2.8 0 0 0 2.801-2.802V25.6z" />  <path d="M54.4 25.6h-7.467v1.465c0 .743.295 1.456.821 1.981a2.799 2.799 0 0 0 1.981.821h1.864a2.8 2.8 0 0 0 2.801-2.802V25.6zM51 29.867v4.266M51 45.769v2.408c0 .484-.194.947-.538 1.289a1.847 1.847 0 0 1-1.3.534H29.867M15 50.133h-1.162A1.838 1.838 0 0 1 12 48.295V29.867M14.4 54h11.733L24 41h-7.467L14.4 54zM19.2 46h2.133M19.2 49.067h2.133" />  </symbol>
        <symbol id='dic' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" /></symbol>
        <symbol id='blog' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" /></symbol>
        <symbol viewBox="0 0 48 48" id="call" xmlns="http://www.w3.org/2000/svg" fill="#000000"  >  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>  <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>  <g id="SVGRepo_iconCarrier">    <defs>  <style>    {`.b { fill: none; stroke-linecap: round; stroke-linejoin: round; }`}  </style>  </defs>  <path className="b" d="m23.5947,15.0005c.548-1.0177,1.1956-1.996,1.9428-2.9205.7344-.9086.6287-2.236-.1974-3.0621l-3.832-3.832c-.9854-.9854-2.5956-.8934-3.4904.1749-9.0143,10.7619-9.0143,26.515,0,37.2768.8948,1.0683,2.5022,1.163,3.4876.1777l3.4162-3.4162c1.2472-1.2472,1.3503-2.5721.616-3.4807-.7472-.9245-1.3948-1.9027-1.9428-2.9205-.6703-1.2448-1.9774-2.0111-3.3913-2.0111h-3.2796c-1.3552-4.5526-1.3552-9.4226,0-13.9752h3.2796c1.4138,0,2.7209-.7663,3.3913-2.0111Z"></path>  <g>    <g>      <polyline className="b" points="26.3775 24.6979 23.498 27.5607 26.3775 30.4236"></polyline>      <line className="b" x1="23.498" y1="27.5607" x2="36.7429" y2="27.5607"></line>    </g>    <g>      <polyline className="b" points="33.8634 22.528 36.7429 19.6652 33.8634 16.8024"></polyline>      <line className="b" x1="36.7429" y1="19.6652" x2="23.498" y2="19.6652"></line>    </g>  </g>  </g>   </symbol>
        <symbol id='Exit' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" /></symbol>
        <symbol id="curve" width="100" height="22" viewBox="0 0 100 22" fill="currentcolor" xmlns="http://www.w3.org/2000/svg"> <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" /> </symbol>
        <symbol id='chevron-down' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"> <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></symbol>
        <symbol id='Map' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" /></symbol>
        <symbol id='Mail' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" /></symbol>
        <symbol id='Phone' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" /></symbol>
        <symbol id='Insta' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></symbol>
        <symbol id='Telegram' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></symbol>

      </svg>


      <ResponsiveHeader />
      <MainSection />
      <Footer/>

    </div>

  );

};

