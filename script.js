/*
In ES6 we can do this
class CategoryData {
    constructor(catId, parCatId, name, keywords) {
        etc, etc...
    }
}

*/

var startingData = new Array();

function CategoryData() {
    this.categoryId = 0;
    this.parentCategoryId = -1;
    this.name = '';
    this.keywords = '';

    this.constructor = function(catId, parCatId, name, keywords) {
        this.categoryId = catId;
        this.parentCategoryId = parCatId;
        this.name = name;
        this.keywords = keywords;
    }
}

function getDataByCategoryId(categoryId)
{
    var catData = findRow(categoryId);
    
    if (catData.keywords == '' || catData.keywords == null)
    {
        catData.keywords = getParentKeywords(catData.parentCategoryId);
    }
    return catData;
}

function getParentKeywords(categoryId)
{
    var found = findRow(categoryId);
    if (found.keywords == '' || found.keywords == null)
    {
        return getParentKeywords(found.parentCategoryId);
    }
    else
    {
        return found.keywords;
    }
    return "";
}

function findRow(categoryId)
{
    var found = new CategoryData();
    for(i = 0; i < startingData.length; i++)
    {
        if (startingData[i].categoryId == categoryId)
        {
            found = startingData[i];
            break;
        }
    }
    return found;
}

function getData() {
    var catData = getDataByCategoryId(document.getElementById('categoryId').value);
    document.getElementById('categoryData').style.display = '';
    document.getElementById('parentCategoryId').innerHTML = catData.parentCategoryId;
    document.getElementById('name').innerHTML = catData.name;
    document.getElementById('keywords').innerHTML = catData.keywords;
}

function getCategoriesByLevel(maxLevel)
{
    var categories = new Array();
    for(i = 0; i < startingData.length; i++)
    {
        // Check if its a root object
        if (startingData[i].parentCategoryId == -1)
        {
            var level = 1;
            getInnerCategory(level, startingData[i].categoryId, categories, maxLevel);
        }
    }
    
    return categories;
}

function getInnerCategory(level, categoryId, categories, maxLevel)
{
    level++;
    for(j = 0; j < startingData.length; j++)
    {
        if (startingData[j].parentCategoryId == categoryId)
        {
            if (maxLevel == level)
            {
                categories.push(startingData[j].categoryId);
                continue;
            }
            getInnerCategory(level, startingData[j].categoryId, categories, maxLevel);
        }
    }
}        

function getCategories() {
    var categories = getCategoriesByLevel(document.getElementById('hierarchy').value);
    document.getElementById('categories').style.display = '';
    var catString = '';
    for(i = 0; i < categories.length; i++) {
        catString += categories[i] + ', ';
    }
    catString = catString.slice(0, -2);
    document.getElementById('categories').innerHTML = catString;
}

function setStartingData() {
    var tc = new CategoryData();
    tc.constructor(100, -1, 'Business', 'Money');
    startingData.push(tc)

    var tc = new CategoryData();
    tc.constructor(200, -1, 'Tutoring', 'Teaching')
    startingData.push(tc)

    var tc = new CategoryData();
    tc.constructor(101, 100, 'Accounting', 'Taxes')
    startingData.push(tc)

    var tc = new CategoryData();
    tc.constructor(102, 100, 'Taxation', '')
    startingData.push(tc)

    var tc = new CategoryData();
    tc.constructor(201, 200, 'Computer', '')
    startingData.push(tc)

    var tc = new CategoryData();
    tc.constructor(103, 101, 'Corporate Tax', '')
    startingData.push(tc)

    var tc = new CategoryData();
    tc.constructor(202, 201, 'Operating System', '')
    startingData.push(tc)

    var tc = new CategoryData();
    tc.constructor(109, 101, 'Small Business Tax', '')
    startingData.push(tc)
}

setStartingData();