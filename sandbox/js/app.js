
var sampleText = "I'm tired of trying to find happiness through lies and self-medicating. If you need me, I'll be at the bar. The only thing I found in the fridge was a dead dove in a bag. But anyhoo, can you believe that the only reason the club is going under is because it's in a terrifying neighborhood? Oh, I'm sorry, I forgot… your wife is dead! They once called me the worst audience participant Cirque du Soleil ever had. \
 I need a fake passport, preferably to France. I like the way they think. Oh, COME ON! YOU'RE the Chiclet! Not me. Caw ca caw, caw ca caw, caw ca caw! It's ok. You be with Yam. So did you see the new Poof? His name's Gary and we don't need anymore lawsuits. If this were a Lifetime Moment of Truth movie, this would be our act break. But it wasn't. Michael, look, this has got to stop. I mean, flattered? Yes. Interested? Not tonight. \
 I'm foolish and I'm funny and I'm needy. Am I needy? Are you sure I'm not needy? 'Cause I feel needy sometimes. Obviously this blue part here is the land. \
 Let's see some bananas and nuts! This was a big get for God. They don't allow you to have bees in here. I want to cry so bad, but I don't think I can spare the moisture. No, Pop-pop does not get a treat, I just brought you a [bleep]ing pizza. It walked on my pillow! I'll buy you a hundred George Michaels that you can teach to drive! A group of British builders operating outside the O.C."
//INPUT: STRING
var getCounts = function(textStr){
var wordCountObj = {};
var wordCountObjA = {};
var noPunc = textStr.replace(/[.,\/#!$%?\^&\*;:{}=\-_`~()]/g,"");
var wordArr = noPunc.toLowerCase().split(' ');
   for (var i = 0; i < noPunc.length; i ++){
      //console.log(wordArr[i])
      var listOfWords = wordArr[i]
      //console.log(listOfWords)
      if(typeof wordCountObj[listOfWords] === 'undefined'){
         wordCountObj[listOfWords] = 1
      }else{
         wordCountObj[listOfWords] = wordCountObj[listOfWords] + 1
      }


}
            console.log(wordCountObj.need)
            console.log(wordCountObj.you)
            console.log(wordCountObj.needy)
            console.log(wordCountObj.caw)
            //OUTPUT: object
            return wordCountObj;
}
var wordFrequencyObject = getCounts(sampleText)
console.assert( wordFrequencyObject.need === 3 )
console.assert( wordFrequencyObject.you === 9 )
console.assert(wordFrequencyObject.needy === 4)
console.assert(wordFrequencyObject.caw === 6)
