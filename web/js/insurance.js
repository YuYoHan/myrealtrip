function guide(){
    Swal.fire({
        width: 1000,
        html: `
                <h1 style="text-align:left;">여행자보험 서비스 가입</h1>
                <hr>
                <div style='overflow: scroll; text-align:left; height:500px'>
                    <h3>보험계약 중요 안내 사항</h3>
                    <div style="background:#cbe7fd; text-align:left; padding:15px 15px;">보험가입 시 유의사항</div>
                    <h5>해외여행보험 불가능(보상불가)지역</h5>
                    <p style="font-size:0.9em;">외교통상부가 지정하는 지역별 여행 경보 단계 중 3단계 출국권고 4단계 여행 금지 지역으로의 여행은 보험가입이 불가합니다. 이란, 북한, 시리아, 쿠바, 크림반도 및 세바스토플 지역 등의 제재국가 및 현재 외교통상부에 여행제한국가로 명시되어 있는 국가를 경유하는 여행으로부터 직접 또는 간접적으로 발생하는 모든 손실, 상해, 손해 또는 법적 책임은 보상하지 않습니다.</p>
                    <h5>제재 제외 조항</h5>
                    <p style="font-size:0.9em;">보험회사는 담보, 보험금, 보상의 제공 또는 그러한 혜택을 제공함으로써 UN 결의안, 무역/경제 제재, EU나 영국 또는 미국의 법률이나 규정에 의한 제재나 금지 또는 제한을 받게 될 경우에는, 보험금을 지급하거나 어떤 혜택을 제공할 책임이 없습니다</p>
                    <h5>단체여행보험 상품</h5>
                    <p style="font-size:0.9em;">이 보험은 보험계약자를 마이리얼트립으로 하여 체결하는 단체여행보험 상품이므로 연말정산 소득공제 대상에 해당되지 않습니다.</p>
                    <h5>보험수익자 지정</h5>
                    <p style="font-size:0.9em;">보험 계약의 수익자는 사망 시 법정상속인, 그 외 경우 피보험자 본인이 됩니다.</p>
                    <h5>보장 범위 안내</h5>
                    <p style="font-size:0.9em;">해외여행을 목적으로 주거지를 출발하여 여행을 마치고 주거지에 도착할 때까지 일어난 사고에 대해서만 보상합니다.<br>실제 보험 가입시각 이전에 발생한 사고는 보장되지 않습니다. </p>
                    <h5>다수계약의 비례보상 안내</h5>
                    <p style="font-size:0.9em;">해외여행중실손의료비(해외/국내)특별약관, 해외여행중휴대품손해(분실제외)특별약관, 해외여행중중대사고구조송환비용 특별약관, 해외여행중배상책임 특별약관, 해외여행중중대사고로인한여행중단추가비용 특별약관, 항공기및수하물지연보상 특별약관, 해외여행중여권분실재발급비용 특별약관의 경우 다수보험가입 시 비례보상되며 중복으로 보상되지 않습니다.</p>
                    <h5>휴대품손해 보상 안내</h5>
                    <p style="font-size:0.9em;">- 물품을 도난 당하신 경우 현지 경찰서에 신고 후 police report를 발급 받으셔야합니다.<br>- 휴대품 손해는 물품당 20만원 한도로 보험가입금액 내에서 실제손해액을 보상합니다.(단, 자기부담금 1만원)<br>- 해외여행 중 분실된 물품은 보상하지 않습니다.</p>
                    <h5>항공기 및 수하물 지연 보상 안내</h5>
                    <p style="font-size:0.9em;">아래 사유에 해당하는 경우, 실제 지출하신 비용에 대해 가입금액 한도 내 보상됩니다.<br><br>- 항공편이 결항되거나 4시간 이상 지연 취소되어 탑승 대기 중 시간/간식, 전화통화, 숙박비, 숙박시설 이동을 위해 발생한 실제 비용을 가입한도 내에서 보상하는 담보입니다.(숙박비와 숙박시설 이동 교통비는 숙박이 필요할 경에 한함)<br><br>- 수하물이 항공편의 예정된 도착시간으로부터 6시간 이상 지연되어 도착전까지 필요한 필수품(비상 의복 및 필수품의 구입) 구매에 따른 실제 발생 비용을 가입한도 내에서 보상하는 담보입니다.<br><br>- 수하물이 손실되거나 목적지 도착 후 24시간내에 도착하지 못하는 경우, 피보험자가 해외 목적지에 도착한 시점부터 최대 120시간 내에 발생한 필수품(비상 의복 및 필수품의 구입비) 구매 비용을 보상하여 드립니다.<br><br>- 지연사실에 따른 위로금 보장 담보가 아닙니다.<br><br>- 항공편에만 적용되며 선박 이용시 보상되지 않습니다.</p>
                    <h5>예금자보호안내</h5>
                    <p style="font-size:0.9em;">이 보험계약은 예금자보호법에 따라 해약환급금(또는 만기 시 보험금)에 기타지급금을 합한 금액이 1인당 "5천만원까지"(본 보험회사의 여타 보호상품과 합산)보호됩니다. 이와 별도로 본 보험회사 보호상품의 사고보험금을 합산한 금액이 1인당 "5천만원까지" 보호됩니다. 다만, 보험계약자 및 보험료 납부자가 법인이면 보호되지 않습니다.</p>
                    <h5>전환 계약시 유의사항 </h5>
                    <p style="font-size:0.9em;">보험계약자가 기존에 체결했던 보험계약을 해지하고 다른 보험계약을 체결하면 보험인수가 거절되거나 보험료가 인상되거나 보장내용이 달라질 수 있습니다. 또한 지급한도, 면책사항 등에 따라 보험금 지급이 제한될 수 있습니다.<br><br>※ 보험계약 체결 전 상품설명서 및 약관을 읽어보시기 바랍니다. 보험회사는 해당 상품에 대해 충분히 설명할 의무가 있으며, 가입자는 가입에 앞서 이에 대한 충분한 설명을 받으시기 바랍니다.<br><br>본 광고는 광고심의기준을 준수하였으며, 유효기간은 심의일로부터 1년입니다.</p>
                </div>

            `,
        confirmButtonColor: "#2b96ed",
        confirmButtonText: `&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp닫기&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp`

    });
}

// 숫자를 1000 단위로 콤마를 넣어 형식화하는 함수
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// 숫자 출력
function chageSelect(e) {
    // 선택된 옵션의 텍스트 가져오기
    const text = e.options[e.selectedIndex].text;
    document.getElementById('outputCnt').innerText = text;

    // 선택된 데이터 가져오기
    const value = e.value;

    // 선택된 데이터 형식화
    const formattedValue = formatNumber(value);

    // 데이터 출력
    document.getElementById('outputAmt').innerText = formattedValue;
}

// 초기 로드 시 선택된 값 가져오기 및 형식화
document.addEventListener('DOMContentLoaded', (event) => {
    let selectElement = document.getElementById('ns-Count');
    chageSelect(selectElement);
});


$(document).ready(function() {
    // 라디오 버튼이 변경될 때마다 결제 버튼 상태 업데이트
    $("input[name='payment']").change(function() {
        console.log('클릭되었습니다.')
        updateButtonState();
    });

    // 체크박스가 변경될 때마다 결제 버튼 상태 업데이트
    $(".term-defaultCheckTerm").change(function() {
        updateButtonState();
    });

    // 초기 로드 시 한 번 결제 버튼 상태 업데이트
    function updateButtonState() {
        const allRequiredChecked = $(".term-defaultCheckTerm:not(.c_h):checked").length === $(".term-defaultCheckTerm:not(.c_h)").length;
        const paymentMethodSelected = $("input[name='payment']:checked").length > 0;
        $("#paymentButton").prop("disabled", !(allRequiredChecked && paymentMethodSelected));
    }


    // 결제 버튼 클릭 시 동작
    $("#paymentNSButton").click(function() {
        let getKakao = document.getElementById('KAKAO');
        console.log(getKakao.checked)
        let toss = document.getElementById('TOSS');
        console.log(toss.checked)

        let emailElement = document.getElementById('userEmail');
        let nameElement = document.getElementById('userName');
        let payElement = document.getElementById('payment');

        // 이메일 주소 가져오기
        let email = emailElement.innerText || emailElement.textContent;
        console.log("이메일 : " + email);

        // 이름 가져오기
        let name = nameElement.innerText || nameElement.textContent;
        console.log("이름 : " + name);

        // 결제 금액 가져오기 (숫자 부분만 추출)
        let payText = payElement.innerText || payElement.textContent;
        let selectElement = document.getElementById('ns-Count');
        let price = selectElement.value;
        console.log("가격 : " + price);

        if(toss.checked) {
            console.log('토스 페이')
            tossPay(email, name, price);
        }

        if (getKakao.checked) {
            console.log('카카오 페이')
            kakaoPay(email, name, price);
        }
    });
});