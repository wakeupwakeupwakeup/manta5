import {Slide} from "react-awesome-reveal";
import React, {useEffect, useState} from "react";
import axios from "axios";

interface IProduct {
  id: number,
  attributes: {
      price: number,
      currency: string,
      altName: string,
      description: string,
      name: string,
      photo: {
              data: {
                  attributes: {
                      url: string
                  }
              }
          },
      features: [
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
                console.log(res.data.data)
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
              products && products.map((product, index) => {
                  return (
                    <Slide key={index} triggerOnce={true} direction={product.id === 1 ? "right" : "left"}>
                      <div className={"flex flex-col gap-7 lg:flex-row lg:gap-10"}>
                        <h3 className={"text-black font-bold text-center lg:hidden"}>
                          <span className={"text-red-600"}>
                            {product.attributes.name}
                          </span>
                          - {product.attributes.altName}
                        </h3>
                        <div className={"flex flex-col text-center lg:w-1/3"}>
                          <img
                            src={product.attributes.photo.data.attributes.url}
                            alt={product.attributes.name}
                          />
                          <span className={"text-2xl font-semibold"}>
                            {product.attributes.price.toLocaleString()} {product.attributes.currency}
                          </span>
                        </div>
                        <div className={"flex flex-col gap-2 lg:gap-8 lg:w-2/3"}>
                          <h3 className={"hidden lg:block text-black font-bold"}>
                            <span className={"text-red-600"}>
                              {product.attributes.name}
                            </span>
                            - {product.attributes.altName}
                          </h3>
                          <ul
                            className={
                              "text-[9px] font-medium list-disc leading-5 lg:text-xl lg:leading-8"
                            }
                          >
                            {product.attributes.features[0].children.map((feature, index) => (
                                <li key={index}>{feature.children[0].text}</li>
                              )
                            )}
                          </ul>
                          <p className={"font-semibold"}>
                            {product.attributes.description}
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