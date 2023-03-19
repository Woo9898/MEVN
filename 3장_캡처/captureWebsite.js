import { go } from "fxjs";
import * as L from "fxjs/Lazy";
import * as C from "fxjs/Concurrency"
import captureWebsite from "capture-website";

const BATCH = 5;

const process = ([url, filename]) => captureWebsite
.file(url, filename, {
    fullPage: false
})

async function main(){
    const list = []
    const from = 1;
    const to = 10;
    for(let i = from; i < to; i++){
        
            const url = `https://comic.naver.com/webtoon/detail?titleId=773797&no=${i}`;
            list.push([url, `./3장_캡처/img/${i}.png`])
        
    } //우선 list에 모든 url과 파일명을 담는다.

    await go( // 그 후 list를 process함수의 인자로 전달하여서 process의 file함수를 통해서 지정된 경로의 이름으로 저장
        list, //list를 순회하며 인자를 넘김
        L.map(process),
        C.takeAll(BATCH), // 5개씩 takeAll함수를 통해서 내보냄
    )

    console.log("스크래핑이 완료되었습니다.");
    return ret;
}

main();