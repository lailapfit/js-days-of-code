function suggestionsSearch(repository, customerQuery) {
    let suggestions = [];
    let keywords = getAllKeywords(customerQuery);
    for (let i=0; i<keywords.length; i++) {
        let listByKeyword = getListByKeyword(repository, keywords[i]);
        if (listByKeyword.length > 0) {
            suggestions.push(listByKeyword);
        }
    }
    return suggestions;
}

function getAllKeywords(customerQuery) {
    let keywords = [];
    let keyword = '';
    let customerQueryArr = customerQuery.split('');

    for (let i=0; i<customerQueryArr.length; i++) {
        keyword = keyword.concat(customerQueryArr[i]);
        keywords.push(keyword);
    }
    keywords = keywords.slice(1);
    console.log(`Keywords: ${keywords}`);
    return keywords;
}

function getListByKeyword(repository, keyword) {
    let updatedRepository = [];
    let keywordRegex = new RegExp(keyword, 'i');
    for (let i=0; i<repository.length; i++) {
        let matchArr = repository[i].match(keywordRegex);
        if (matchArr !== null) {
            updatedRepository.push(repository[i]);
        }
    }
    console.log(`Updated Repo by getListByKeyword: ${updatedRepository}`);
    return updatedRepository;
}

const repository1 = ['neon', 'bason', 'bags', 'baggage'];
const customer1 = 'baggage';
const suggestions = suggestionsSearch(repository1, customer1);

console.log(`Suggestions for customer1: ${suggestions}`);