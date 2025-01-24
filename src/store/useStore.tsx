import { create} from 'zustand';

interface stat{ //favourite,add to bag stats
    label:string,
    value:string
}
interface products{  // no of products
    name:string,
    price:number,
    itemsold:number,
    photo:string
}
interface client{ //recent client
    id:number,
    name:string,
    photo:string
}
interface performance{  // performonance component stats 
    label:string,
    value:string,
    orders:number,
    percentage:number
}
interface dashboard{
    User:string,
    UserPhoto:string,
    Stat:stat[],
    RecentSold:products[],
    Client:client[],
    Performance:performance[],

}
export const useDashboardStore =create<dashboard>(()=>({
    User:"Dan",
    UserPhoto:"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAABQYDBAcCAf/EADwQAAEEAQMCAwUHAQYHAQAAAAEAAgMEEQUSIRMxBkFRFCJhcZEHIzJCYoGh0RVDgrHh8FJkcqKywcIl/8QAGwEBAAIDAQEAAAAAAAAAAAAAAAMEAQIFBgf/xAA3EQACAQMDAQUFBgUFAAAAAAAAAQIDBBESITEFE0FRcZEVIjJhoRQWI4HB4SRSsdHwBjM0QmL/2gAMAwEAAhEDEQA/AOgK8csIAgCAIAgCAIDBLdqwH721Cw+jpACtXJeJsoSfCPkN6pOQ2C3A936ZAcpqQcJLlGwVsjUIAgCAIAgCAIAgCAIAgCAIAgNbUL9bTaj7Vx+yJvHAySfQDzK0qVI046pElKlOrLTBHNfEPinU9RLhFuq1zw2KN3vEfqd6/ALk1LudR7bI79Cxp0lnmX0Ko9rnuLpXEvJ9cqHksYxwYXbWHcHBrh2I7rZJrdEc9+dyX0bxtqmiTsMk8lmmD78UhJIb+kq3SrST3ZQr28JpvGGdoqWIrdWG1A4OhmYHscOxBGV0k8rJyGmnhmVDAQBAEAQBAEAQBAEAQDzx5oDFZnZXryTySNYxjSS55wAtZSUY6jaEXOSSRyzWdYsaxaMk0reiw4iY3gAevzXEr15VHnuPTW1tCisJbkHanZC3c85aPTgfVRxi3sTzqKPJGE2rcv3URDQfMYGPmp1FRWWU3KU3hGzDplyRwFau5+P7yTt+2Vhbmzjp27zU1fStUpw9ezCDAD7zmHdt+fopopEFTUt2XH7L/FN5l+tol+bq1ZWdOtlozE5oyBx3BA8/grNKq9WllG4opw1o6wrhzwgCAIAgCAIAgCAIAgNa++7HXJoV4JpQDxNK5g/gHP8AHzWktaXuokgqbf4jaXyOR+MdY8RG10tYiDB3ZFE8CMenYnP7klc6spSf4j/I7NB04RzSj+bK7XvWXv6UFbqWHcevPoB/VQuku9kyrt8LctOieD9UtObNarNeScl9h+xg+AABJ/yRzjE2UKkuTodPQKMFRkUkEZdj3iBxn4ZVeU2y1GKXCIzWaVCR4ZM+VjAcYjmMQ/7SD/Kyps1lCL5IfVKULNKswRyyS1pIiNsshkI48nHn6lSwm8kU4JR2Kd4MGfFmhsjHPWa52PLDST/AKs0cupkoXGI0mju66hxgsAIAgCAIAgCAIAgCAIDA6lUfJudVhc4/mMYJytdEc8G2uWOSgWNDbpf2kadejaHVrlyQfg4a8xOGPqeFy68k5Siju2sJKnCUjY+0jU5fD1dlp0L7E9mQtgL8mGFrcd2j8xyTn4LNvTho1Pc1uKs9elPBPeB79nV/DEVy7F03Enb+puByPhnI/ZV7mkoSWCxa1ZVIvV3MqH2gP1mCeKXSaM8wfjbNFEZNhB5G3BHPxUts4qLZHd63NRXBnfHI7RYLFmEVbs0B9pgDNg3js7b5HGQVtWUdfumLZ1HTeo1vsw0yv/aUFp9drrUcEknU5y3dgAD/AAkhT229XHyK95HFDUdRV9HHCAIAgCAIAgCAIAgCAIAgNK7TryyxTzwiUxytkZx+Fwzgj48rm3dvLVrgjt2N5B0+yqPB99tkMrgBz3wVz8adu87KhBxyuD7qEkjtOJdI6u45yelv/jKx5mkViWxF6ZZfXoEGZ8vT/vHs27v2WdjbbO5BvM+r6iKzCNzzyT2A9SrFKm5PCILqvGlDLLJ4e0VukQyb3iSeU++5vbHoF06NHs/M89d3Xb4S2RLqcqBAEAQBAEAQBAeXvbGxz5HNYxoJc5xwAPUlBzwY2XKr6vtTLMLq2N3WDwWbfXd2wmTOHwe4ZorETJa8jJYngFj2OBa4eoIRPbJhpp4PWfVAfe3dZYML7VZliOtJYiZPLksiMgDngZJw3ucAFasyllGG5RE7+rFIYpccO7g/MKtWtIVXnhl626hVox08rwIbVb+rU4XMlqdRje0sfLSPVcqdLs5aWd2jWp1Ia4oh9Nmua9ZdVikZCxjd0rj+UE+Q7kqejQ7R4RXurtUVwW/S9Kq6YwtgbmQ/jkd+J3+i6lOkqfBwq1edWXvcG8pCAIAgCAIAgCAIDxlZBoa+7/8AC1If8pL/AOJWs09LNoPE0znWm+KY4vs8bpp0zUnOFN0fXbXJj5J53YxhRJvRjBZcG6ucknB4in0zwz4Y0zTnV47t2owiaycRwsAGSfXPl+6KTSSRq4KUm2b2k+JdQZr8Oi6je0+463E72W3UHDXgE7Xtz8FspSzjJrKnFrUljBgr+M7rPCGoWrkcP9tU7LqhhjadpkLsN4z2/omtqL8TLppzWODzbdZd9o3hF158brPsM/VMYw0O6UmcD0WGnqWeTKx2csHQa0Ell4jiGT557Bbzmo7kFODm8IiPEV+9oVGeR1CS+Ge+RGQHxtOeSPzNHbI/dcipT7SpqbPRU3GFJKmt/Dx8vn8jT8KabBq1eHW5qza1mZnWzE45YDnaM/Lk/NbxzTeIsiuWqiSkifsNNWZsUnYnDXequ0a6lszk1qGjePB8yrJVGVkDKAZQDKAZQDKAZQHjKA0dZjdPpV2KMjfJXkYMnjJaQvFddrOl1Km09tv6nf6bBStZbbkFp2nTxfZ4zTXFvXFR0fDvdzkrm1rzPUNab05RejR/Ax3kLqXhuSTQNAsR+xv1GhXbF0LUfUhsNwMtI+HkfirlLqK+0VoSzok85Tw0RO29yLWMm14S0mydY9t1GnpOnuhYelUo1Gg57bi8jPnjAPmob66hGhopSlL/ANOT9NjajRk55mkjSk02tqH2qTCJ7jXgayxZjz7jrAGBx58YPzyrSu6tLpScviey8iNUoSucLgs9+vPL4t0u0yrVfDFDIHzvaeqzLXcN5xzkZyPNcmlc/wAHNOpLV4Z2/v8AUsyortY+6sF80mPZp5k53SEnJXoejwatVKTy2Ubpp1ceBkeyO5T++GHs3e83gscM8g/77rqckEJOMlgh9OwyjO1mOIhjAx+VEb1m9RIaxUEsJ45wNvwKzw00RNZi0yEhl6kQcR72OR8R3XUhLVFM5U46ZNGQnlbmgygGUAygGUAygPmUBj3LIPMrepG5mcbgQvG9fs7iteRnSg5LHcd7plxTp0WpySeTWNaZtX2djo9m3aPVcf2Xfa9XYyyX/tdvjHaL1Mb6LiK2JC3os25aRkLK6bfLV+C9zH2u2/nR7jrSCyyTrvkaO5fjKx7NvXBrsWFd2y37RepiZpcbZZLLGsZM+TqbmjBPzUjseoySg6UsBXNqnlTXqbj4i6xHLnAa3BaD5qv7Kv1Fx7Fm32y2zntEWvTyHafFjsWkL1ljSnSt4QmsNLhnNqyU6jlHg80D79qN2eJA7t6gD/5Ksoj7yu6MyxWh1AXbMcvUe50IYzbsZyA0+p4KMnqRk3wWJ9qCzR69aaOaJ4Ja9jtwI81lkMoyhLTJYZU6r9z7PPDZjjHxV+2+A51zjWbG4KyVxuQDcgG5ANyAbkA3IDHlDUbkywNyAZHwQDcgPmRjHkmAC7jhO7A27zan1J0GkSOruZ7TWjfJEHDIzgkZC5N1JKvg7lnT/h9Ryqz9oOvSbpH6q6EyAbmwRsjHHocZ8z5q5opRexV1Sa3M3gzVzq7Nb043JZrRgF2pI+UyPbLEc5BJPPIUNfS47FywrOlXTnw9n5MsUfilmn26eqQFgp63FmxXaMtZaH4nAfE5+nxVWKL1zhwdKTzKHD8UTOmsfHVHV4fIS9w+fl/kurRhpieYqz1yyjK23Wd09s8ZEhLWe8OSO4UmUzTDRmyFk1yYo7MEkkkTJmOljP3jGnJb8wsZXBs00IrMMr5GRTMe+N2Hta4EtPbB/lMoNNcmXKyYGUMDKAxblkDcgG5ANyAbkA3IBuQEbrkNWSoZb911GnHzPOx3vEdgxrfzOceFSuqSnJPvOv025jRhPVuu5dxWvB1Xw/qPjmGjX0eOOg6J8sLbEhlkle3/AIic8YyQ0ceZ+MVWEooxGUZN4R0COhBHqFhlavCyRheGBrAOxzgfVVuWW54UFLBTKvg61BC43YwWR2XzV4gQTCCTgfMBSJ4IZzc2m/AtVUdWuyQO524Iwudc/wCpI29R0ZUm8d+f2NYdJlUjrU/p+5QaFV0jdCmjuy12ttWicY2AguOTx8MH4FTy6vGDliDzHD58fyNlZZ/7c/p+ZL+DL1mxctVL9yWax0WTg9SOWFzCSN0bm/hBx+F3KXHXFb01U0N5ePBp+TX1Io9PVV6U8fl+5FvsR6F4h1zXZd3RbbNecfDotczA9dwx/iW9Hqnayjoh70llLPzx+5tUs8Q0t/CaVZ13w/X1sx7hcfJUNqRrm7mvlbukI3cA5cQM8ea2pdThLDivizh79z8u8xUtM7N8Fj8K2dQk1W3TsGw+uyFsmbVmGWSN58vuz2I5GR5FQ1+vU6FJVFFyzt3r88uKEemuo9KeMFl3crvU59pBTxjO5ypwcJNeDG5SGphysmBlANyAbkA3IBuQDcgJHTNNi1SrqEMsTHudXcyMuaDtc4EZHxVa5eMFu1WWziujaodE1jTtQe8tNOwOpnjLc7XfwUqx1RJ4vEjsvssA8Yu1OKWZ3tEIja3qHplrm7t231908rmp9xfcU6eSTve9Ht88f+lkhZDaedrJYSeWOyPkf9leS6/S0V4z8UdOynmm14EPFUbWdp7XMDenJM73RyN2eR88qu60pa5J8pfQm7NRwvM9+GdLhozWJK1eOvHMwb2NHL3An3nH15PHxUd9cTqxUJSzj/NjNGCi8ox2dOdbl1Gq2NoFi0JXOxwdrBtJ/cD6KWFwo6J54WPqayhltY+YmqTWBfkEDc2xAJst/EA3BBWsasaehZ+HODLi9zb0DTI9KdNDVrRV67wHFsR43fRQXlw68VKcsv5m1KmoPY2XO953zX0+0/49PyX9DxtX/cl5s+blYIzFuWTA3IBuQDcgG5ANyAbkBvabrdfRmvfZsQQNe4NDpw4MJ9N4zt/cFU7qLeHg6fT4wnmL581n0fPlkj5naFXlsPp1dHZLZLndWtI2TIJHOcA93dlyqsqucS4O1Tt4QWcb/NYKjpvjn2fUYK+oOcGRx9AzBuWRua73eO5HcE+h+CnVOWMlZVIbqX+f5+hbbXjnRYovvNRpb8ZJi6lg59NrWt/lwWVCfga6Ir4mvVL9W/oa2kar/aLvb6z3GtJuaOowMJIOOGjkDg93FKnS6N3FdutlxhtFWre9g8UXv5f3x+hJe1Sfp+ii+7Vh4P1ZH7WufFeg9rk/T9Fj7tdP8H6sx7XufFeg9qk/T9Fn7tdP8H6se1rnxXoPa5P0/RY+7XTvB+rHta58V6D2uT4fRPu10/8Alfqx7Xufl6GHcSST3K7sIKEVGPCWDnSk5NyG5bGpi3LIG5ANyAbkA3IBuQDcgIbxW3qaa0eXUGVrIlo7ywVF1SGGIv6bfXhoULLUVjYy1dCbe8O2brWuEzH7ogD+Vv4vn5laqDcWzDqaZpGk2mwQZHLsfVGjdFp8BzH2GxVdz0pfd+Th/UFSUn3Fa4WJJln3qYrnzcgG5ANyAbkA3IBuQGLKGBlANyAZQDKAZQDKAjvEBJ0t4ABy5oHzytZ8E1H4yn6lO/2UNxjcQ0fuq0+C6ucl30quKenV6+AQ2MAj1J75VmKxHBz5yzPJVLlb2O5LVAJaHZjz5tPb+n7KGSwXactSybfg1xiv3oSMF7GObn4E/wBVmk9yK6XuotWVOVBlAMoBlAMoBlAMoDHlZAyhgZQDKAZQDKAZQIj9eBdp5A79Rq0nwT0H75XLbIJ7Olwb2BxlBmYHZLe2M+n+qrcySLktoNl0J5Vw5hE67WEjYrLRl0J97/pPf6KOotsli3nh4ZotnireJKz4dr45WdJ7w4AZOCPnyB/Kr03iRZrxzTLHlXDnDKAZQDKAZQDKAZQHjKYAymAMpgDKYAymAMpgDKYBpaxFLYoSRwML5eCxo7krWeyJaHxkTX0C5SnqXLr4ow2TPQjG4N58z2yqkZe+i/Uj7jLFvA81dZy8GOfbLE6MnG5pCPgzHlMhL3h2SqILWo22FkJD2NYNgHplx5yqEpbnVUVpbJ8OyBngnyV5cHKfJ9ys4MDKYAymAMpgDKYAymAeVkBAEAQBAEAQAOLSCPIj/NYayZi8PKKb4o8TX5JtTqSMrubDPCyB/T96EdN7st5xnLRyuXNuMtjrw9+G5NfeQRU/vnvMtaOVznYzlw57K5Sk3Hco1oKMsI9TTPbA54PIUrbSIoxTKJPrt7Wrum1b7mPhitsY1objgvGc+vbzXNzmR1MYjj5HSqMjpasb3nLnAErqLg475M62MBAEAQBAEB//2Q==",
    Stat:[
        { label: "Favorites", value: "+6.9K" },
        { label: "Add to Bag", value: "+2.4K" },
        { label: "Orders", value: "+1.0K" },
    
    ],
    RecentSold:[
        { name: "Bang Bag", price: 1500, itemsold: 1,photo:"data:image/jpeg;base64,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" },
       { name: "Dresses", price: 3500,   itemsold: 25,photo:"data:image/jpeg;base64,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" },
    ],
    Client:[
    { id: 1, name: "Amy Pope", photo: "data:image/jpeg;base64,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" },
    { id: 2, name: "Lee Waters", photo: "data:image/jpeg;base64,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" },
    { id: 3, name: "Johnny Sutton", photo: "data:image/jpeg;base64,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" },
    { id: 4, name: "Jennie Walton", photo: "data:image/png;base64,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" },
    ],
    Performance:[
        { label: "Total Income", value: "$1.4K", orders: 150, percentage: 15 },
        { label: "Worst Selling", value: "$1.0K", orders: 85, percentage: -10 },
        { label: "Best Selling", value: "$1.0K", orders: 65, percentage: 45 },
    ],

}));




