export default{title:"Components/ButtonGroup",argTypes:{size:{control:{type:"select"},options:["small","medium","large"]},type:{control:{type:"select"},options:["default","primary","success","info","warning","danger","text","link"]}}};const Template=t=>`<sc-button-group ${t.separate&&"separate"}><sc-button\n  type="${t.type}"\n  size="${t.size}"\n  ${t.caret&&"caret"}\n  ${t.loading&&"loading"}\n  ${t.full&&"full"}\n  ${t.disabled&&"disabled"}\n  ${t.outline&&"outline"}\n  ${t.pill&&"pill"}\n  ${t.circle&&"circle"}\n   data-testid="button">\n   <sc-format-number type="currency" currency="usd" value="2000"></sc-format-number></sc-button> <sc-button\n   type="${t.type}"\n   size="${t.size}"\n   ${t.caret&&"caret"}\n   ${t.loading&&"loading"}\n   ${t.full&&"full"}\n   ${t.disabled&&"disabled"}\n   ${t.outline&&"outline"}\n   ${t.pill&&"pill"}\n   ${t.circle&&"circle"}\n    data-testid="button">Click me</sc-button>\n    </sc-button-group>`;export const Button=Template.bind({});Button.args={separate:!0,type:"default",size:"medium",loading:!1,caret:!1,full:!1,disabled:!1,outline:!1,pill:!1,circle:!1};