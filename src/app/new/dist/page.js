'use client';
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var Page = function () {
    var router = navigation_1.useRouter();
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("div", { className: 'p-2 flex flex-col gap-8 text-black' },
            react_1["default"].createElement("div", { className: 'text-4xl font-bold ' }, " Premium Makhana for Local & Global Markets  "),
            react_1["default"].createElement("div", null,
                react_1["default"].createElement("div", { className: 'text-xl font-bold  text-center text-black mb-2 ' }, " Our  Products "),
                react_1["default"].createElement("div", { className: 'flex flex-col gap-4' },
                    react_1["default"].createElement("div", { className: 'bg-black p-2 rounded-md cursor-pointer', onClick: function () { return router.replace('/app?option=0'); } },
                        react_1["default"].createElement("div", { className: 'border-white border-2  rounded-md  text-yellow-500   p-2 bg-[url(/handpickedMakhana.jpeg)] bg-cover bg-center   h-[300px]  flex flex-col justify-between' },
                            react_1["default"].createElement("div", { className: 'text-xl font-bold  text-white' }, "  Handpicked  Makhana "),
                            react_1["default"].createElement("div", { className: 'text-xs font-bold text-white' },
                                "  ",
                                react_1["default"].createElement("span", { className: 'bg-black ' }, " Carefully selected for superior quality, handpicked "),
                                " ",
                                react_1["default"].createElement("br", null),
                                " ",
                                react_1["default"].createElement("span", { className: 'bg-black' }, "  makhana offers unmatched taste, purity, and "),
                                " ",
                                react_1["default"].createElement("br", null),
                                " ",
                                react_1["default"].createElement("span", { className: 'bg-black' }, "  freshness, ensuring the best snacking and health "),
                                " ",
                                react_1["default"].createElement("span", { className: 'bg-black' }, "  experience.   "),
                                "  "))),
                    react_1["default"].createElement("div", { className: 'bg-black p-2 rounded-md cursor-pointer', onClick: function () { router.replace('/app?option=1'); } },
                        react_1["default"].createElement("div", { className: 'border-white border-2  rounded-md text-white     p-2  bg-[url(/semihandpicked.jpg)] bg-cover bg-center h-[300px]  flex flex-col justify-between ' },
                            react_1["default"].createElement("div", { className: 'text-xl font-bold' }, " Semi Handpicked "),
                            react_1["default"].createElement("div", { className: 'text-xs font-bold' },
                                " ",
                                react_1["default"].createElement("span", { className: 'bg-black' }, "  Partially screened for better quality,  semi- "),
                                " ",
                                react_1["default"].createElement("br", null),
                                "   ",
                                react_1["default"].createElement("span", { className: 'bg-black' }, "  handpicked makhana balances affordability and  "),
                                " ",
                                react_1["default"].createElement("br", null),
                                "  ",
                                react_1["default"].createElement("span", { className: 'bg-black' }, "  refinement, delivering a satisfying snacking "),
                                " ",
                                react_1["default"].createElement("br", null),
                                "  ",
                                react_1["default"].createElement("span", { className: 'bg-black' }, "  option.  "),
                                " "))),
                    react_1["default"].createElement("div", { className: 'bg-black p-2 rounded-md cursor-pointer', onClick: function () { router.replace('/app?option=2'); } },
                        react_1["default"].createElement("div", { className: 'border-white border-2  rounded-md  text-white   p-2  bg-[url(/handpicked.jpg)] bg-cover  bg-center  h-[300px] flex flex-col justify-between ' },
                            react_1["default"].createElement("div", { className: 'text-lg font-bold' }, "  Non Handpicked "),
                            react_1["default"].createElement("div", { className: 'text-xs font-bold' },
                                "  ",
                                react_1["default"].createElement("span", { className: 'bg-black' }, "  Standard quality makhana processed in bulk , "),
                                " ",
                                react_1["default"].createElement("br", null),
                                "   ",
                                react_1["default"].createElement("span", { className: 'bg-black' }, "  offering an economical option with good taste and "),
                                " ",
                                react_1["default"].createElement("br", null),
                                " ",
                                react_1["default"].createElement("span", { className: 'bg-black' }, "  nutrition for everyday use. "),
                                " "))))),
            react_1["default"].createElement("div", { className: 'border-[1px] bg-white px-4 py-2 rounded-md' },
                react_1["default"].createElement("div", { className: 'font-bold text-lg ' }, "Why Makahana?"),
                react_1["default"].createElement("div", { className: 'text-xs' },
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Low in Calories:            "),
                        " ",
                        react_1["default"].createElement("span", null, "Helps in weight management and makes it an ideal guilt-free snack.                    "),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Rich in Antioxidants:       "),
                        " ",
                        react_1["default"].createElement("span", null, "Fights free radicals, prevents cell damage, and slows down aging."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "High Magnesium Content:     "),
                        " ",
                        react_1["default"].createElement("span", null, "Supports heart health, regulates blood pressure, and promotes better nerve function."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Good Source of Protein:     "),
                        " ",
                        react_1["default"].createElement("span", null, "Aids in muscle growth, repair, and overall body strength."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Low Glycemic Index:         "),
                        " ",
                        react_1["default"].createElement("span", null, "Helps manage blood sugar levels, making it suitable for people with diabetes."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "High Fiber Content:         "),
                        " ",
                        react_1["default"].createElement("span", null, "Improves digestion, prevents constipation, and promotes a healthy gut."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Rich in Calcium:            "),
                        " ",
                        react_1["default"].createElement("span", null, "Strengthens bones and teeth, supporting better skeletal health."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Gluten-Free:                "),
                        " ",
                        react_1["default"].createElement("span", null, "Suitable for people with gluten intolerance or celiac disease."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Anti-Aging Properties:      "),
                        " ",
                        react_1["default"].createElement("span", null, "Promotes healthy skin and reduces wrinkles by combating aging signs."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Natural Detoxifier:         "),
                        " ",
                        react_1["default"].createElement("span", null, "Cleanses the liver and kidneys, promoting better organ health."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Sleep-Inducing Properties:  "),
                        " ",
                        react_1["default"].createElement("span", null, "Improves sleep quality with its calming effect."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Energy Boosting:            "),
                        " ",
                        react_1["default"].createElement("span", null, "Provides sustained energy without causing sugar spikes."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Anti-Inflammatory:          "),
                        " ",
                        react_1["default"].createElement("span", null, "Helps reduce chronic inflammation and pain."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Supports Hormonal Balance:  "),
                        " ",
                        react_1["default"].createElement("span", null, "Particularly beneficial for women by balancing hormones naturally."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'text-s font-bold' }, "Stress-Relieving Properties:"),
                        " ",
                        react_1["default"].createElement("span", null, "Reduces stress and anxiety with its calming and soothing effect."),
                        " "))),
            react_1["default"].createElement("div", { className: 'bg-white px-4 py-2 rounded-md border-[1px] text-xs' },
                react_1["default"].createElement("div", { className: 'font-bold  text-lg' }, " Why buy from  us?  "),
                react_1["default"].createElement("div", null,
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Premium-Quality Makhana:        "),
                        react_1["default"].createElement("span", null, "We offer a wide selection of high-quality makhana, available in sizes ranging from 4 mm to over 6.5 mm, catering to various preferences and needs.                     ")),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Variety of Textures and Colors: "),
                        react_1["default"].createElement("span", null, "Our makhana is available in different textures and vibrant colors, providing a diverse range of options for all customers.")),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Handpicked Selection:           "),
                        react_1["default"].createElement("span", null, "Whether you prefer machine-picked, handpicked, or semi-handpicked makhana, each product is carefully selected to ensure the highest level of freshness and quality.")),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Commitment to Organic Practices:"),
                        react_1["default"].createElement("span", null, "Our makhana is produced using organic farming methods, ensuring it is grown naturally without the use of harmful chemicals.")),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Ideal Growing Conditions:       "),
                        react_1["default"].createElement("span", null,
                            "Grown in the optimal environmental conditions of Bihar, our makhana benefits from the region", "&apos;",
                            "s perfect climate for high-quality production.")),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Certified Buisness:         "),
                        " ",
                        react_1["default"].createElement("span", null, " We are a fully certified and licensed business, ensuring quality and trustworthiness in every aspect of our operations. "),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Reliable Suppliers:         "),
                        " ",
                        react_1["default"].createElement("span", null, " Our network of trusted suppliers guarantees a consistent supply of premium-quality makhana."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Global Reach:               "),
                        " ",
                        react_1["default"].createElement("span", null, " We are certified to export our products internationally, ensuring seamless delivery across borders."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Strong Network:             "),
                        " ",
                        react_1["default"].createElement("span", null, " With established contacts in the industry, we ensure smooth operations and quick problem-solving at every step."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Quality Assurance:          "),
                        " ",
                        react_1["default"].createElement("span", null, " We adhere to the highest standards of quality, ensuring that every product delivered meets customer expectations."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Customer-Centric Approach:  "),
                        " ",
                        react_1["default"].createElement("span", null, " Our focus is always on providing the best experience to our customers, from order placement to delivery."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Experienced Team:           "),
                        " ",
                        react_1["default"].createElement("span", null, " Our team of professionals brings years of expertise, ensuring efficient management and superior service."),
                        " "),
                    react_1["default"].createElement("div", null,
                        " ",
                        react_1["default"].createElement("span", { className: 'font-bold' }, " Sustainability Focus:       "),
                        " ",
                        react_1["default"].createElement("span", null, " We  are committed to environmentally friendly practices, ensuring that our operations are sustainable and responsible."),
                        " "))),
            react_1["default"].createElement("div", { className: 'bg-white px-4 py-2 rounded-md border-[1px]' },
                react_1["default"].createElement("div", null,
                    " ",
                    react_1["default"].createElement("span", null, "Certifications"),
                    " "),
                react_1["default"].createElement("div", null, "Certificate of Incorporation")),
            react_1["default"].createElement("div", { className: 'bg-white px-4 py-2 rounded-md border-[1px]' },
                react_1["default"].createElement("div", null,
                    " ",
                    react_1["default"].createElement("span", null, "Testimonails"),
                    " "),
                react_1["default"].createElement("div", null, "Testimonail..")))));
};
exports["default"] = Page;
