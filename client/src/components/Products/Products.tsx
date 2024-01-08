import {Slide} from "react-awesome-reveal";
import React, {useEffect, useState} from "react";
import axios from "axios";

interface IProduct {
  id: number,
  attributes: {
      Price: number,
      Currency: string,
      ProductAltName: string,
      ProductDescription: string,
      ProductName: string,
      ProductPhoto: {
              data: {
                  attributes: {
                      url: string
                  }
              }
          },
      Features: [
         {
             children: [
                 {
                     children: [
                         {
                             text: string
                         }
                     ]
                 }
             ]
         }
      ]
  }
}

export function Products() {
    const [products, setProducts] = useState<IProduct[]>()
    
    useEffect(() => {
        async function fetchData() {
            try {
                const res = await axios.get(import.meta.env.VITE_API_URL+"/products?populate=*", {
                    headers: {
                        Authorization: "bearer" + import.meta.env.VITE_API_TOKEN,
                    }
                })
                setProducts(res.data.data)
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()
    }, []);
    
    
    return (
        <>
          {
              products && products.map((product) => {
                  return (
                    <Slide triggerOnce={true} direction={product.id === 1 ? "right" : "left"}>
                      <div className={"flex flex-col gap-7 lg:flex-row lg:gap-10"}>
                        <h3 className={"text-black font-bold text-center lg:hidden"}>
                          <span className={"text-red-600"}>
                            {product.attributes.ProductName}
                          </span>
                          - {product.attributes.ProductAltName}
                        </h3>
                        <div className={"flex flex-col text-center lg:w-1/3"}>
                          <img
                            src={
                              import.meta.env.VITE_UPLOAD_URL +
                              product.attributes.ProductPhoto.data.attributes.url
                            }
                            alt={product.attributes.ProductName}
                          />
                          <span className={"text-2xl font-semibold"}>
                            {product.attributes.Price} {product.attributes.Currency}
                          </span>
                        </div>
                        <div className={"flex flex-col gap-2 lg:gap-8 lg:w-2/3"}>
                          <h3 className={"hidden lg:block text-black font-bold"}>
                            <span className={"text-red-600"}>
                              {product.attributes.ProductName}
                            </span>
                            - {product.attributes.ProductAltName}
                          </h3>
                          <ul
                            className={
                              "text-[9px] font-medium list-disc leading-5 lg:text-xl lg:leading-8"
                            }
                          >
                            {product.attributes.Features[0].children.map(
                              (feature, index) => (
                                <li key={index}>{feature.children[0].text}</li>
                              )
                            )}
                          </ul>
                          <p className={"font-semibold"}>
                            {product.attributes.ProductDescription}
                          </p>
                        </div>
                      </div>
                    </Slide>
                  )
                })
          }
        </>
    )
}