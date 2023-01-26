import React from 'react';
import ReactDOM from 'react-dom';


function Card(){
    return(
        <div className='card'>
            <img src="shorturl.at/eIKQU" alt="" className='card-photo' />
            <div className='card-stats'>
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAADbCAMAAABOUB36AAAAwFBMVEX////0wB7//fTyvhj//vn///z0wBP7xADyvRv1vgDxvh7//vj3wwD/++n6xgD4xgz+8Mj8yxn/9dT/6qj+0Dn94pb/2FX//O//88H/2D3//Ob/7rP/6ZX/6KP/11b/+Nz+1V3/44//4HP923b/3oD90Cn/2GT+34r/1kz/7rj/3VL/44j/4nv+9d78zRv+8cz968D/4Gb75qv+2Gn4y0L6z1f/66H/5Hb/10H51nX/1C3/32j1x0H/8bf2xTD/6pKpT3yXAAAKMUlEQVR4nOVdaWOqOhAtogFi2BRFrVevVVq3urbWa9/r/f//6qHWtipgWJIB3vnSb2WOk+VkZjK5u+MOw+D/TQD0/0BbwAPPptmFtoEDeoT0oG1gj4IpCGYB2grmqOqCoFehrWCNwlgUBHGcd3eOJCwIWBpB28EYv5HgAv2GtoMtDBPvaWIz3xJhcHCm684BtCUsoUrCJyQV2haG6JETzTxLBNWSTzRlK7/urH4503VnfiWChb5pCha0Nayw0PA3S6wtoO1hg9L6pzMFtC5BW8QEn9Lgy505lQgPZ8503fkAbRELqBI+p5lPiVAjFywFUoO2KXn8kAZ5lghV5ZJlLiWCdc0yhxJhZHrRNHMWRSiuRS+a4roIbVmiqEheLN09pQJtWaLo69409T60ZUmi61ztJkfITp4SDTXkzdJVfDmSCLbjx1IQHBvausRQ1fxparmRCIWO525yhNjJS6Jh4bPMHqHnJYrQ8V2ADotQB9q+ZFCRfHaT0+zMh0QYoMvz9BlwPhINXSeQpcszFxKhdxU1uEQeEg3FgD3za3Zm/5xS1W6M2X1kOvMSwa4HSIMT5HrWFV+D3HSm607SgLYzJoKlwQlZlwhzk8KZ+0TDHNrSWHiicqbrzgm0pXHw7BnP84L5DG1rDLRvSoMTSBva1ujwSCj4IcuJhlXgQfMc+gra2qgovlBIgxPEYVYVX4N6Zu6RWYnwSLmbHIEeoe2NhvmMShqcgGfZrEWYhnKm684ptMVRoPpkh/yRyVqE61qDW8hiLYJqhZqZe+Bt9txZDe3MTNYiBGSH/OFAWx0WjdshoGtgLWMSwafW4BayVotQ0SM403Wnnq1Ew2UZIi1QpmoRunQhIA93ZurSY40mbOlJM0sSQY20mxzhZEciPEWQBieQJ2jrabGYUYeAriFn5TymWpH2zBPEbAS/1GHEzeQENMwAz64Vk6XL00r9rrJxYrN0eTobaB5BsEdDPcbq8w1ZH45SmvJUG70hScCVRyAy7DXSMkfLdqtbMVbtt/FOUjRFjqh9vCDL7j+UduO33mpR6bbsMgS/Qsu430z+rDvb3UxSFLT3YoIcj9j/Q4SQIpm7bWf9Z9K+N545FPjZrYqxWNWmy6ZLTdJ0gpAoY5w4vSu6GMsiQkTXNEUxm8tpbbUwKq1EJ2+pXC48G/ftSf/1xXWd9uk6gQM9D7r7PwcHz3bbl9f+YO9gu1yOfhgvt7qN0ao2WI53LjVN113XiQDcPOHagUXXwbq+t203Xg5qq1Gj0qIc0uWCbe9dN33v/GM5M1P6dB2DiZcMPn9217+KOXOsfzrv04OD7ULZ63ao3TX+rdae3sdNU1HIwXU8Zl2S+HIwUYjZHL8PatV/ja79yXbUni6HH4J5cJ0oJrK7w0N2Gbsr9MwUPobLt/bobu6Q43aQLd/RAB84uUv0bu6O12FwvWvWgdHwsPXYHZKToeoFmXROG+xbtKhqFoDNt28JME3mYJE+yPr058ayiRGkSjO0i4NrlbrsLEswrzKJCy1WoCqNEL36gczjB3HSBbHpWb36vMsVT7TzCZyp9fwIBYzqviEWta7khafiz9LdQPtRU1npAib9wJN2eZIHoSDrk1sRslqcPE86IM8oSq3vZxnfQMXZ/W2WLk8z0zxlk4qlKxSSyINAATnUV1oq2RVEyApRcuMKBWh7oyFAFHjBHmbxpI31sFcHS2/Zi5zg8zM0FYrTrAkiTKZRkgy/Qldxw0KKmOL+ZWZo3Mrmr2gs7+4a2RFE4ixGKa7RzAhPn0gBLSrZ4Il2MetwMyEUQooCb55p31gw6SRRcvKQ7pO2rCfTALY4CXenjS+wPkjqGsDf9EYU5NnfhEjeHR8xSSeSfVpllM6Igph0r1DDSSFP0Um8krqbvsgJYtE2Sh2njCcaM6nQtLdpEgqYjBlV3BamHv2fgYCVKbNizGL/qjc7ELAUnCSJiV9RrmUmD3xZU5A4zzREFORZ5EgBLUY78A1U3HFoIA4uFMQdl+tVwLUYyOLU90sFLGbEHK9WqR0FaCHCJH48JATeYVIsWOfbbaccrhdQUkC/Od+6Kca9vhiJ5ZD73SLjVnfd5IGTP17eRpwL1NEAcu1a5V6aaoLcABxwnp1ArbQbUVtVRAM2YdrP2B88WQrCB9D93BeuoxasVe87X5pQb+VNuMbidahOvf8TmlO+NKGaKi75zk2oVqBh2s8mQPMFhmUrRvOjKHBaIDQbfJPYOE7lTwz84pxqUJgHZ71Q6nMOZIp9iKeR7SZfloLQhBC14dvsxgVIm94R9yygAvEoKV+ptweI3HvlHtpDr/xZxmwzFwUQrenmEAFM/o/DrAAq4SX+z09MIKLu3Neg0pY/S0HY8tZBBYrH3pKHxvtJUgOkREjhnUTZQCQ4sc67aWQfJr/JuYO2HfSqLzuIHb6HlMoOJikf975JSCxgivewxPdZZP/X09mC89vsUCXEaMyVJlgTJZMnyy5Y/TDh2Vb6HqqsFmuUvRsSwRNUwx2scDykFB7Bak3FR37qvdWEq8Bs8sukzOEq+7HEL1BSjbXQxmudqvB7hCty/hYf+gIf2k9H5YqW3GhaEUkiTRlOVovFajIkWtQKa4sXy1a0MYvMh9FXLKc0etCjjQmF1xoUqYpN1DvGWcCqZHSi9KPkV9MW5cElsvVYOu634dvYcHu0qRg+QIKcnuex3+45oacoYno77IdtIUO0WNQefAV39yH0WrTlEyh5DikOpHrgbDLqUqjdBUt83mUPlb/FxKneqMMvVp1QU5RTNjdEDRtGzoRCahcmYaYop6q2DvUKJGp1ylNwt06/ufAprFU/aEcYGYbY4hp12psQ8gePbK5BV9yF0a4d6mhY2OzoDut83vFe0Sy0GJmD0Ou+PTBppiiWeBxSaO5liPo4Uni8MtYppiiPmxqF8U0zZGJFXvNHNPpvzD5QYt8M0SKnHUOn2O3bXUF09jpofkMcBCk7Orj678bIVdgHStrB4kCvJ2DCvHPjIxRNk2NiHTCkMJlVE5k2hftZ0GEPrZP4SBBs/wJ3V9n1ElsbCkFHNPGF9eSs+BZ3idoy0RxrZSn5/aLYYZ3NHfmUVshaGGVHh8bYZy3COutDSs17oUXmhsE4sjem90rAOptb8szfIm3CKNzWmngGF1CdbblXcXb9TVF/ZDhVKo9e+m/GNh7UvTotyWR7z/an9Yr/Mc7mVi/ytxhZNeYCs1CzLkYu1tgeUgbn3kRSXGVHh+6DdL4mEKaHlMLrz3ni7pTcSgWN5dnmIr6yHEPP2+9Zsld2HHtnlM/if/KWZSbF+BYHyPnLubi18Pf7iIZ1luPoK38rmo8AD6J3H786jjLN5n7mb0USHEhnh0adHIkyzeYeL6Yq1gbksew9ypvPTmIOu2/sb79hpE9BH0FXB/p+F1XYGdHQsKgne9yKgspSF7HGbtrUCLFGEHdFL1AaWYRdNre0dtpgk/IcxbazZvV7q7CT8hzhjPkPE8vcqSsqingAAAAASUVORK5CYII=" alt="" />
            </div>
        </div>
    )
}


export default Card;