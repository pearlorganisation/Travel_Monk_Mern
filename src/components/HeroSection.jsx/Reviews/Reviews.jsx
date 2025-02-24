import React from "react";
import { IoLogoOctocat } from "react-icons/io5";
const Reviews = () => {
  return (
    <div className="bg-white mt-0">
      <div
        className=" flex justify-center gap-10 h-full my-3 w-full pt-1 pb-1"
        style={{
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;",
        }}
      >
        <div className="flex justify-center items-center">
          <img src="googleicon.png" alt="google" />
          <div
            className="flex flex-col gap-[0.1rem] hover:cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.google.com/search?client=safari&rls=en&q=travel+monk+adventures&ie=UTF-8&oe=UTF-8&dlnr=1&sei=4mdNZ9CLMbWH4-EPyYGJ8Ac#dlnr=1&topic=mid:/g/11cmh5569r",
                "_blank"
              )
            }
          >
            <div className="px-2 py-1">
              <p>(115) reviews </p>
            </div>
          </div>
        </div>

        <div
          className="flex justify-center items-center hover:cursor-pointer "
          onClick={() =>
            window.open(
              "https://www.tripadvisor.in/Attraction_Review-g319724-d23299649-Reviews-Travel_Monk_Adventures-Dharamsala_Kangra_District_Himachal_Pradesh.html",
              "_blank"
            )
          }
        >
          <img src="tripadvisor.png" alt="tripadvisor" />

          <div className="flex flex-col gap-[0.1rem]">
            <p className="px-2">(3) reviews </p>
          </div>
        </div>

        <div
          className="flex justify-center items-center hover:cursor-pointer"
          onClick={() =>
            window.open("https://www.facebook.com/imtravelmonk", "_blank")
          }
        >
          <img src="facebook.png" alt="fb" />
          <div className="flex flex-col gap-[0.1rem]">
            <p className="px-2">(80) reviews </p>
          </div>
        </div>

        <div
          className="flex justify-center items-center hover:cursor-pointer"
          onClick={() =>
            window.open("https://www.instagram.com/imtravelmonk/", "_blank")
          }
        >
          <img
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAMAAzAMBEQACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAYHBQj/xABMEAABAwMABAgHDAgFBQEAAAABAAIDBAURBhIhMQcTIkFRYXGhMnKBkbLB0RQjMzZCUlRVkrHh4hYXU4KTo6TCFURic6IkY2Wz8UP/xAAbAQABBQEBAAAAAAAAAAAAAAAAAQIDBAUGB//EADwRAAIBAwEDBgsJAAMBAQAAAAABAgMEEQUSITEGQVGhseETFSJSYWNxgZHB0RQWMjRCU2Ki8DWC8TMk/9oADAMBAAIRAxEAPwDcUAcu+3mksVC+rr5dWNuxrR4Tz0DrU9tbVLmoqdNbx9OnKo8RMU0q0vuekUzmSSOgofkUrHbN+93zj3dC7ew0yhaJNLMun6dBrUraNNekruFpNk+zniHhJuHqIoBNJVEUAmNkiiKATWyVRFAJjZIoiwE1slSDATWyRRFAJuSRRFAJuSWMRWEzJKoigE1skUQ8JmSRRFJBwEABAoEAEkyAEmQwhynnlppWy08j4pG7WvYcEJk4xksNbiOrThUjszWUaXodpv7ucygu7msqjyWTbhIevoKw7ux8H5dPh0HHapongk6tv+HnXQXlnOs050UkAZqZ4qWnkmmeGxxtLnuPMAnQhKclGPFixTbwjAtLdIKjSS6PqpC5tMzLaaI7mN6e08/4Bd5p9nC0pKK4vi/9zdBv0LdUoJc5xMK/kn2A9VJkcoB6qa2SKAoBNbJFAVjamNkiiKATWx6iKATWyVRFAJrZIohgJrZIoigE1slUQwE3JIoiwExskURQCQelgCQUCACSZACTIoEmQCTcgBJkUCTIBh2DlNbGyRqvB7pIbnSG31jy6qpxyXuOTIzr6xuWFe2/g5bUeDOI1zTlb1PDU15L5uh/Rl0G5UTAM84WrwYKCC1QuOvUnXlwfkDm8p+5b2hW6lUdaXNw9pqaZQ25Oo+YynC6rJubAeEm0O2A9VJtDlAPVTWx+wKDUjY9QJFHQ1VbLxdHTyTu+bGzKiqVoU1mbwE5QprM3gslDwfaQVTWufBDTtO336THcASs6pq9tHnz7ClPVraG7OfYdaHgvryAZrjTMPOGRud7FVlrkOaDIHrtJfhgyS3gtfz3gDspfzqJ65/Dr7hvj9ft9fcK/Vafrn+k/Ok8der6+4VcovVdfcGOC7/zP9J+dJ46/h19w/7yeq/t3B/qu/8AMf0v50j1n+HX3C/eb1X9u4P9WB+uP6X86Txx/Dr7h33n9V/buB+q8/XP9L+dJ44/h19wfef1X9u4L9WB5rz/AEv50vjj+HX3B95/Vf27huTgxnHwd1Ye2Aj+4pVq654dY5cp489Pr7iFUcG94jyYKiklHNynNJ7sd6fHVaT/ABJlinyjtX+KLXwfzOJcdGLzbhrVNBJqDe5mHjzhWKd3RqcGaVDVLWvuhPf0cO045BBIOwjeFNk0MhJMihJuQAkyKBJkCbZrjLarnT1sJOYnZcB8pvOPMoqsFUg4sq3lsrmjKk+c3mkmZUU8c0RBZI0OaRzgrnmnF4Z5lODhJxlxRiXCDVmt0trjrZZCRAzq1Rt7yV2Wl0/B2sPTv+J1OnUdi2j6d5XdVX8l/ZAGo2hdgPVwmuQ9QFMaS4DG1I30j9jmNA0T4Pn1cbKy+B0UZ2spgcOI6XHm7FhXer7L2KHxMG91ZQexQ+P0NHo6GmoYWw0dPHDGBjVY0BYFSpOq8zeWc/UqzqPM3lklpACYMDyEADIQAaAAgAIACAAgAIALIQAMhACTghAm7iV+/aIW28NL3RCCo3iaIYOesc6s0bqpS3J7jUstWubVpJ5j0Mym/WOtsVVxFYzku2xyt8F46uvqWxSrwrLdxO4sb6leQ26fvXQcwqXJeCym5AGUmRQIyI95svBxXe69FacOdl1O50J2bsbR3ELFuobNT2nn2u0fBXsmuEt/+95kN3dxt3r5f2lTI7zuK7CgtmjFdCXYdLbU8UoL0LsImFJkn2A9VJkeoBgeRI2LsbjRuDrRRrmtvFewHO2mjd6R9SwdTvpZ8DB+05vWdQabt6W7pfyNHHJzlYRzZAu94oLRBxtfO2MHwW73O7BzqWlQnWlswRYtrStdS2aUc/IpNw4ScOLbdRZG3D5jjuC1Kek53zZ0Vvyays1p/A40mn99eMa9OzxIvxVpaZQXT8TQjyfs1zP4kZ+mmkD91eW+LG32KRadbL9JOtEsV+jrYn9M9IvrN/8ADZ7Ev2C283tHeJrH9vrf1B+mWkP1nJ9hnsR9gtvN7Q8TWH7fW/qD9MtIfrOT7DPYj7Bbeb2h4msP2+t/UH6Z6Q/WT/4bPYkdhb+b2i+JrH9vrf1C/TPSL6yf9hnsTfsNv5vaHiax/b639QDTTSEHP+Jv7OLZ7E12Vv5vaJ4lsf2+t/Ufj07v7Dk1LH+NGFFKwo8yI3oNk/0te8m0vCRdYz/1NPTTN6gWqKWnU/0vBWq8m7aS8iTXWWiyae2u4ObFU5o5jsHGeCfLzeVUq1nUhvW9GJd6Dc0E5Q8pejiW4PBAI25VMxGsEC82mnu9BJSVbAWOHJPOw9IT6c3TllFi1uqlrVVSm/8AdBiN8tc9muEtFU7XNOWvG57eYrap1VUgmj0eyuoXVFVYc/ac9PyWwJMgHlGQLpoVeHW+1ywtONacu/4tHqVC5htTyc7q9mq9dSfR82VCo5dTK7peT3ldRF4ikaUIYikN6qXaJNgMNSbQ5QOno5bDdb1S0ZyGPfl5HM0bT3BVrqv4GjKXOVb6v9mt5Vejh7TdIWMhjbHG0NY0ANA5guRbcnlnnUpOTbfE5ukt5hsltfVSgOf4MUefDcprag69RQXDnLdhZyvKypx4c/oMXudwqbpVvq6yUvmfvPMB0AcwXU0qUaUdiK3HoVvb06FNU6awkRVIWEBAAQAEABABJGxQJmQCKbkAkxsUNMyGd+Dp2/R28XGETUdvmkiO5+A0HszvVedzSg8ORSr6laUJbNSaT+PYRK+grLdMYa2nkgk6HjYew7iiNSM98WTUbmlXjt0pZRbuD/SySkmitVwkLqZ51YXuO2M8zez7lSurdNbcTA1zSVUi7ikvK510+n2mp62dizDjSk8J9pFVZxcI2++0pGsRzsJx3HHerVrU2Z7PMzoOT146Vx4J8JdplC0sndLeEkyLgCMinUtchbTuA+f6goKm9lK5jmZDfte89LiugTJYxWEJwjI7AaAZfuCehD6uurnD4NjYmHtOT9zfOsfVqm6MP9/t5y/KWtiEKS59/wAP/TSTsWGciZPwl3E1N8FGHEx0rMEc2sdp7sLoNMpqFLa6Tt+T1r4O28K+MioLS2jfSAjaFAlyAEZACMgBDYmQvKExsMhZTGxQk3IICY2OO5oXaorvpBBT1DdaBgMsjT8oDm8+FUuqrp020Zer3UrW1lOHF7l7zbWRtawNaA0DYAAsLOeJ508ve2cfSi0U92tFRFO0FzGF8bsbWOA3hSUqjhPKL2nXU7W4jKD3PczDAS07Mgg52cxW03lHpeymjdNErgbpo/R1Tjl5ZqvOMcpuwrFqx2ZtHmmpW32a6nTXDm950a+kjraGopZfg543Rux0EYTE8PJVo1HSqRqR4p5PPUrHxSPjkGHsJa4dBG9a6e7J6rCSkk1wEIyPAkyBNon6sRH+pRze8r1V5Q0TtJ6VvbQ/AWU1yAGUm0Bq/BXFqaPyyftKhx8wA9SwdRlmrjoRw/KOWbtLoRcnLPfAwDBdIJ3VF9uErjnNQ/B6g4gd2F0tB4pRXoPTbGmoWtOK6F2EBS7ZbAk2wAl2wAAScAbc4wl2+ca2Wuw6C3K5Bk1WRR0528sZe4dTebyqlW1GEN0d7MO916hQzCn5Uur4l3t2gtio9UvgfUvx4U7s927uWbUv60nueDnK+uXlV7pbK9B14rFaYm6sdupmjoEYUDr1XvcmUZXtzN5lN/EYqtFrHVNcJbZT8re5rNU+cJ0bmsv1Mmp6neQe6o+0rN54NqWRpfaKl8Mn7KY6zD1Z3jvVqnqMluqb0a9rykqReK8cr0bn8OHYZ/d7PXWefia+B0ZPgu3td2FaFOtCosxZ1Fre0bqO1Slnt+A/ovdzZL1BWlpdEMslaN+qd/lG/wAijuIKpBxItRtHd28qXPxXtNuo62CtgZPSTRyxPGQ5rs7FhuLi8M85q0p0pbE1hnB0y0jprRbJo2yMfVzNLY4wcnbsyepS0aTnL0GlpWn1bqsnjyVxZiy1Wz0Y1bgmmc+yVMTnE8XUnA6AWj15WddLy8nD8poYuYS6V9S8ncqpzhgmlUIg0juTB9Ie7b1nPrWjSfkI9O02e3Z036F1bjkp+S+BJkCRTnkHtTGyKa3hLZcwAmOYBJu2BsXBo3GisB6ZJPSKxb15rM4HX3/+6XsXYWl25VTFPPFTJxlTM/50jj3rfjLEVg9VpR2YKPQkN5S7ZIDKNsA25cQ1oLiTgBoySjbwNe7e+BqehehsVvjjr7lGH1jhljDtEX5lmXF3Kfkx4HE6vrEq7dKi8Q6enuLtqgDYqRzwh0gYCXENA5yUJZ4Ak28I50mkdljfqvu1EHZxgTtOO9P8FPoZbjp93JZVKXwZKpLnQ1xIoq2mqMb+Kla7HmKRwmt7RFVt61L/AOkGvamShyt/MmkBEultpLnSupa2ESxOG483YeYp0JuDzEnt7ipbz26bwzHNLNHZtH60NOs+kl+Cl9R6wtahXVRek7/TNRhe08rdJcV/uY40FXUU2t7mqJYdbfxby3PmT5Qi+KNGVKnUXlxT9qGpJHyPL3uLnne5xyT5Um5cB8YRisJCE1seaXwPyZjukfzXRu84d7FSuuKOP5Ux8qlL2/I0U7lUOTMN08aG6W3ID57fQarlJ+QekaJvsKb9vazgJ+TWwBGQwOwnkntTWyOa3hrTcxAJjmARKa5imy8G3xRpPGk9MrLuXmqzz7X/AM/P3dhZ3bj2KAxjzi3cFrKe49axgPKNsAJdsC9cGViFXUPutSwGKB2pCCNhfznyDHn6lWuKu7ZRzHKK+dKCtoPfLe/Z3mpaowqOTjCu6WaUw6P0+rgTVjx73CDu63dSkp03Nmppml1L2WeEVxZk14vlxvMmvX1L3tzyYxsYOwLQhGMFuO5tbC3tVimt/TznOUu0XQ2PdG9r43Fj2nkuacEHtSbWeI2cVJYZdNFtPauimZTXiQz0pwONO17PaO9VatBNbUTndR0CnVi526xLo5n9DVKeWOohZLE8SRvGWuadhCpPccXOEoScZLDRCvtpgvFumoqgANeOS7G1juYhOhNweUT2d1O1rqrDm6zB6ymmoqualqG6ksTyx46wtWM9qOUenUasatONSPB7xhGSUCaxTRuB3w7seqH+9Url70chyq4Uf+3yNKO5VjkTDuED44XLx2eg1Wqf4UekaH+Qp+/tZXkrZrARkUcjPJ8qa2Mkt4eVecxoExzAJMcxTZuDT4oUnjyemVSqvMzz3X/z8/d2Fnf4J7FGYx5xb4IVtT3Hrb4h5S7YA2nY0EknAARt43jXhbze9Hbe22WWjpABmOIaxHO47SfPlVZPLPML6u7i4nUfOx+6V8Vtt9RWzn3uBheevq9SRIit6Mq9WNKPFvBg1yrqi5VstXVOLpZXax6hzAdQVyLwsI9Ot7eFvSVKHBEZO2ywBLtABLtADZuO5LtCM0Pgsvb+Oks1Q86pBkp8u3Y3t9fnVauv1HJco7FYV1D2P5P5fA0sbRlVjkjKOFa3NprxDWsbhtTHh2B8pv4Y8yt289zR23Ju4c6EqT/S93vKMrWTpgk3Ipo/A78JdvFh/vVS44nI8qeFL/t8jS1XOQMO4Q/jhcMdLPQCsU/wno+hfkKfv7WVxDZsATcgKYcBA1oWp3MaBRuYATHMDZuDP4nUfjyemVFJ5Z57r/8AyE/d2Is7/BPYkMZcTzg3wR2I29x64+IaNsCZZY+OvNDH01DPvyjbzuK17LYt5y9DPQg3IPLClcK1S6DRlsTN1RUsY7sALvvaEucM6Dk3TjK8cn+mL+S7GzJE7bO8AnKYATtoAJdoAJ6kB09F6l9JpHbJmHGKljSf9LjqnuJSSeYso6lTVS0qRfQ+reuw3xu7Yqp5iijcLcWvZKaQf/nUfeCFNQeJHScmZ4uZR6UZQrWTuQkZA0fgd+Eu3iw/e9Vq/E5HlVwpe/5GlqA5AxDhE+N9f+56IU0OB6PoX5Cn7+0rSU2Ak0AwUuAHFG5jAKNzACjcwNm4MvidR+PL6ZUkXlHnnKD/AJCfu7EWh24pxjrieb4/AHYqSqbj1x8RWEvhBMkyzSGC80MhOAKhm/tAS+E3orXkVO3qR9DPQYORlWzywpfCtTul0ZZM3GKepY93YQW/e4JlR4WTf5N1FG8cX+pP5P5MyTKjUzvgJymAE9SEAn7YBFO2gOnovTuqtJLZEwZJqWOPitOT3ApzluKWpVFTtKsn5r69xvo3KI8wKLwtzallpohtMlR5sDKkp/iOk5Mwzcyl0IyhT5O5AnZA0fgc+Eu3ZD/eq9bicjyq4Uvf8jS1EcgYhwifG+v/AHPRCnp8D0bQvyFP39pWk5o2QIwAeEYEFrNcxAwCVE5iZD1Ex1BuTZeDT4oUv+5L6blcoPMMnn2v/n5+xdiLQ7cVI+BjHnSFnvTD0tCxvCHrMn5THNRJ4QbtBOYfknB5j0FL4QMm7aO3FtystJVgjlxjXA+S4bCPIVrUpqcFI8zvqDt7mdN8z6uYfutDHcrdU0Uw97njLCejI3p8oqSwyG3ryt60aseKeTBbhb57dWzUdW3Vlhdqu2YDhzOHUVnOTg9lnp1vcQr01Vp8H/sEYtT1MsZCwU9TFCUikKGpFIRtLiaJwV2F+vJeqhmBgx04I358J3q86ennecjylv00rWD9L+S+ZpecDbsSnImTcK1xbU3qGhjcCKWPL8H5Tvwx50+G47jk1b+Dt5VWvxdiKQpUzpQk7IGj8Dnwl37If71FV4nI8qeFL/t8jS1EcgYfwhEHTC4drPQCs0l5J6NoX5Cn7+1lcUmDYAjACmjIRga2OtYudlUGNjgYoXUGuQsMUTqDHI13g1GNEqYf92b/ANjlrWbzRRwmv/n5exdiLO7cVZZjHn6KLEbRjcMLl3UPUpTy8i+LSeEG7QOLR4QXaLjwc3htDVSWypfqw1LteIn5L9xHlGPKOtaWn3CUth85zuv2fhYKvBb47n6V3fM0zWAwtg5Arulmi0F+g12kRVkbTxc3T1O6QoK1BVF6TU03VJ2MscYPmMqu9lr7RKW3CmfEwHAl3xu/e9u1Zs1Om8NHb2l9Quo5pPL6Of4HOLcjI2jpRGoXdrfgQIy+RsUbS+Rx5LGDLj2AKeMxXNJbUtyLnorwf1ddIypvLDT0o2iEnlv7egd6tQi3xOd1PlBSpxcLZ7UunmXs6TVYIo6eJkMLAyNgw1rRgAKwcTKUpNyk8tkK/XaCzW2WtqDkMHJZzvdzAdqG8FiztZ3VZUoc/UukwWrqZa2pmqqh+vNM8ve7rKEz0+jSjRgqcFuW4aUiZKEnpgaNwOfCXcdUP96ZUOR5VcKP/b5GmFRnIGG8IHxwuPjN9BqtUvwo9I0T/j6fv7WV9TGqBLgByMcnypGhkuJLazqXGyqEDkONYoJVBrkLDFE5jdo1Xg62aMxN+bLJ6RK6HT5ZoI4jXfzrfoXYWZ25XTHMNli1JpW48F7h3rjam6bR6TCWYJiNRMyx20DU6kbTDINQ6wIJBG0EHBBTlPG9CN5NF0T0pbVsZRXJ4ZVDYyQ7pR7V0FlfRqJQnxOR1PSnSbq0V5PR0dxby7OxaZhhOYHNLXAEdB2pGk1hgsrgcyTRqySuL5bRQOcTkn3Ozb3KN0afmr4F2Oo3kVhVZfFkmjtdDQ7KKjpqcHfxUTW58wTlCMeCIKtzXrb6k2/a2yX4PlTyEh3W50lrpH1VdMIomjed5PQBzlJKSit5Nb29W5qKnTWW/wDbzGNLNI6jSKt13Ax0sWRDCTu6z1qDbyehaZplOyp4W+T4v/cxw09SNQCkUhQKVMDSuB5mIrpJjwnxN8wd7U2Tycdypl5VKPt+Rox3JpyZhunh1tLrkR+0aP8AgFapfhPSNFWLCn7H2s4CnRqhp6AehHJPahojnxOi1i88lMqOQsMUTkMbFtamtjWzSODeTWss0f7OcjzgH1rotKlmi10M5HXo4uU+lFrctQxDHLrTuhutbE4YLZ3+YnI7lxt0tmtJek7+1qKdCEvQiKI1X2idyFCNJtCbQri0bQ3aAItoPR0JdvHATJYLPpTXW8NjnHuqAczzyx2O9q0rbVatPEZ+UusyrrSaNbyoeTLqLVRaX2qpaOMkfTv52yjGPKNi2KWp29Ti8P0mLW0m5p8Flej/AGTosvNte3LK6nI/3ArKuaL4TXxKjtLhPDg/gMVGklop2kvr4TjeGu1j5gmyvLePGaJIaddzeFBlcvGn8bWllopTK/mln5LR16u89mxVKmpw4QRr22gTe+vLC6Fvfx4dpQLxX1t2qDNcKh8rx4I3Nb2DcFX+0Sm8yZ1Frb0baOzSjg5b4yFZhUReixohWIyJAKVMAKZMDVuCSFzLJVSuaQJKk6vWA0D78pWcLymnm5hHoXzZejuSHOGB6UT+6NJLlJgj/qHt8xx6lbp7kkenabDYtKcfQuvectTovgUiEJNOOQe1KyKfE6oavM5cWUsiw1MyMbFhiRPeNbLjwdVHF1dXSOIHGMEjR2HB+8LZ0ar5UqfvOe12m3CFRc274l6Jyt85szzTa3mnu5qQPe6gA5HSNhXM6vS2K23zM6rR7jboeD54nBbGsdyNTaFiNNyJtB8Wk2hNoPi+pG0G0FxaNoNoSYupO2hciHRDfqhKpjtobdF1J6kPUhl8XOpY1GPUhh8XUrEKhKpkaSHqVyFQmjMiSxK7TqliMiOQQrcZ5JEwYJOAMndgbyVPFiNm76I202nR+jpHeGGaz/GdtP3qQ8y1O5+03U6i4c3sR0bhVMoaCpq5vg4I3SOx0AZQVqNKVapGnHi3j4nnqWR80j5ZTmSRxc49Z2lXInqkIqKUVwW4SpYjwKWIEyjbmM+MlkV6rxI7BZhzh0HC8xqbpNGepZFNao8iNjgYm5Gtk6z1Zt1xgqRuY7Dutp2FT2lx4GtGZVvKPh6MqfSapC5sjA9hy1wBBHOF2qaayjiXFptMhXu3RXOjMEhw4cpjvmlVru2jcUnCRPa3Mreptoz2qopqOodBUMLZB5ndY6QuLuKNShUcKiwzq6VeFWCnB5Q2GKs2SbQri0ZE2g9RJtCZBxaXIu0JLEu0LtCSxLtC7Q26NOUh6kNPjT0x6kMPj6lLGRIpEeSNWYTJYyIksSuU6hYjIhTMAzt2fcr1OoTQnndzly4P9EZKqeO7XJhbSsOtBG8bZXfO6m9HT9+jSzLfg53XNXjCDt6L8p8X0ej29PQargAZU5xfBFH4UbwKa0NtzHDjqs8odEYOe84HnTo8To+Tlp4W48M+Ee1mUKzFndAUqYBqaIh0razWgcf9XqCJveU7h4kdysi4qvqYz8mZ7fMSvM7hYqzXpfaZtGe1Si+lLsENaqzY9scDU1sY2LazakyMk9xb9E7uImNoKp+AD708/cug0rUFhUJv2GDqdnlutBe0tg2710PHeYeCNXUFNWx6lREHAbjzjsKhr21KvHZqLJLSrVKMtqDOBU6KbSaSo7GyD1rDr6AnvpS9zNSnqz4TiQnaN3Bu5sbux6oPQ7tdHxLC1Og+kQbBcB/lwf3gono94v0j1qNDzhH+BXL6K77Q9qZ4qvf2+tfUd9vt/O7Qv8CuX0R32h7Uviq9/b7PqL9voecEbDcvojvtD2o8VXv7fZ9Rft9v53aIdYLn9Ed9pvtS+K7zzOz6jlf2/ndo2dHrmd1E/wC032p60u88zrX1HLULbzxB0burt1GR2uHtT46Zd+Z1oXxlbL9Qg6JXd5xxDB4zwrENLuuhC+N7Zfq6hyHQS4yn3+aCEdRLirlLTa2fKaQ2WvUIryU2dy1aEWuie2WqBrJRtHGeCD4q06NnCG972Zl1rlxWTjDyV1/EtQY0AYGMblbMY596u1NZqCSsrZNVjfBaN7zzAdaG0ixaWtW6rKlTXd7TDr1dai83KWtqfCecBvMxvMEsWek2dpC1oxpQ/wDX0kJWIstgCmQBqeIhddCrM64WuWUDOrOW/wDFp9ahrzxI53V7xUK6i+j5sm6UUnue+1QxhsjhI3y7+/K4HU4bFzL07yrp1XwltD0bvgc5rVltlxsca1NbGtjrWJjYxsdDd2E1MjbLJZ7++FogriXMG6QbSO1dBYa04JQr8On6mPdaepPbpcegssE8VQ3Wie17d+QV0lOrCqtqDTMeUJQeJLA8ApRoaABhAAwgAsDoQAMDoQAMDoQGA8DoQGAIAGB0IALA6EAA9ONiAK/fdLLfaGubxnuio5oYznznmVepc04bs5ZpWelXF084xHpf+3mUX+8V17q+PrpByc8XE3wGDoHt5+5QKq5PLO4sbOlaQ2Ka9r52chwIVynI0UErMWKBWIgKViI1mz8HNF7k0Vpy5uH1DnTHy7u4BZ9xLaqM8912t4W9ljmwvr15Eaa2/jYIq2NvKj5L/FK5/WbfbpqquK7A0m42Zuk+D7SotauUbOgbHWtTGxjY61qZkY2Otam5GNiw1NyMbHoXSxO1opHMPS04UlOvOk8weCOcYzWJI6MN7r4wAZGSDoc1adPXLuG5vPtRTlY0ZczRJZpDUfLgiPYSFajyjq/qguvvInp0OaTHBpG76KP4n4KX7y+q/t3DPFq87q7w/wBJD9D/AJv4I+8vqv7dweLf5dXeH+kh+ifzfwR95fVf27g8W/y6u8B0kP0P+b+CPvL6r+3cHi3+XV3hHSUj/J/zfwS/eT1XX3C+LP59XeIOlBH+S/m/lSrlJ6r+3cKtL/n1d4h2lbhuoB/G/Kl+8fq+vuHLSl5/V3jMmlsw8CiYO2Qn1BH3gk+EF8R8dIjzzINRpbcXAiKOCPoOqSR5yo563XlwSRZhpFBcW2cS43m51gLZ6uXV+aw6o7lG7+vV/FL4GjQs7el+CK95w5mb06nM1IMgSsWjSkWYsivatClImTGiNqvQY8CswAn2S3yXW6U9FEDmV4Dj0N5z5lO5bMWyreXEbajKq+Y3ylibT07IYwAyNoa0DoCzW87zzCc3OTlLiwTRMmidFI0OY4YIPOmSipRwxIycZKSM/utsfbat0bgTG7bG/pHtXEahaStamP0vgdTa3Ua8E+cjtas15J2x1jUzIxsdDUxsZkWGpGxjYsNSZEyHqpMiZBqoyGQYRkMgwjIZBhGQyDVSZDIRalyLkQ5qcmOTGnNT0x6YxI1PTJEyNI1Spk0WRZWqeEiaLIczVdpyLEWQZ2q/SkWYMhyNWjSkWEyO8YK0qUiVMT/8VyO4GazweaNPtlIbhXRkVtQOSwjbEzmHad/coq09p4Rweuakrqp4Kk/Ij1surVCYIZ3IAi11FFWwGKduRzHnBVevbwr09iosolo1pUZbUSn3G0T29/KBfD8mQbvL0Ljb/Tatq88Y9JvW95CsuhkZjcLJeSw2PNamMjbFhqbkbkPVSZEyHqoyGQsIDIWECh4QAECB4QARajIZEEJ2R2Rp4Tkx6Yw8KRMkTI8gUiZKmRpWqaLJ4shzNVumyeLIM7VoUmWYMgy4ytClIsxe4ajglqJmw08T5ZXHDWMaST5Fp0mPnUhTjtTeEaRoVoN7gdHX3drX1QAcyDOREevpP3K059Bx2r6466dG3/Dzvp7i+NGFGc2KQB//2Q=="
            alt="insta"
            className="w-10 h-10"
          />
          <div className="flex flex-col gap-[0.1rem]">
            <p className="px-2">(96) reviews </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
