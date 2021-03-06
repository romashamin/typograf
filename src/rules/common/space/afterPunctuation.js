Typograf.rule({
    name: 'common/space/afterPunctuation',
    sortIndex: 560,
    func: function(text) {
        var privateLabel = Typograf._privateLabel,
            reExcl = new RegExp('(!|;|\\?)([^!;?\\s[)' + privateLabel + Typograf.data('common/quot') + '])', 'g'),
            reComma = new RegExp('(\\D)(,|:)([^,:.?\\s\\/' + privateLabel + '])', 'g');

        return text
            .replace(reExcl, '$1 $2')
            .replace(reComma, '$1$2 $3');
    }
});
