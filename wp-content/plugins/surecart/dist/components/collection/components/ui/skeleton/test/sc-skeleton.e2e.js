import{newE2EPage}from"@stencil/core/testing";describe("sc-skeleton",(()=>{it("renders",(async()=>{const e=await newE2EPage();await e.setContent("<sc-skeleton></sc-skeleton>");const t=await e.find("sc-skeleton");expect(t).toHaveClass("hydrated")}))}));