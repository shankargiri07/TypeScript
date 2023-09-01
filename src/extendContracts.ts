// interface hdfc_version1_contract
// {
//     Personal:string;
//     NRI:string
// }

// interface hdfc_version2_contract extends hdfc_version1_contract
// {
//     Loans:string
// }

// interface hdfc_version3_contract
// {
//     GovtSchemes:string
// }

// let low_compatible_user:hdfc_version1_contract = {
//     Personal: "Personal Banking",
//     NRI: "NRI Banking"
// }

// let high_compatible_user:hdfc_version2_contract = {
//     Personal: "Personal Banking",
//     NRI: "NRI Banking",
//     Loans:"Personal and Housing Loans"
// }

interface IProducts 
{
    Name:string;
    Price:number
}

interface ICategory
{
    CategoryName:string;
}

interface ProductContarct extends IProducts, ICategory
{
    Title:string;
}

let obj : ProductContarct = {
    Name: "TV",
    Price: 24000.22,
    CategoryName: "Eelectronics",
    Title: "Samsung"
}