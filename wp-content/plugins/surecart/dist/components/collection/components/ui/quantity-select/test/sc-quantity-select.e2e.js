import{newE2EPage}from"@stencil/core/testing";describe("sc-quantity-select",(()=>{it("renders",(async()=>{const t=await newE2EPage();await t.setContent("<sc-quantity-select></sc-quantity-select>");const e=await t.find("sc-quantity-select");expect(e).toHaveClass("hydrated")}))}));