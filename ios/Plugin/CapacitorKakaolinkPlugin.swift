import Foundation
import Capacitor
import KakaoSDKLink

/**
 * Please read the Capacitor iOS Plugin Development Guide
 * here: https://capacitorjs.com/docs/plugins/ios
 */
@objc(CapacitorKakaolinkPlugin)
public class CapacitorKakaolinkPlugin: CAPPlugin {

    @objc func sendCustom(_ call: CAPPluginCall) {
        let hostname = call.getString("hostname") ?? ""
        let templateId = Int64(call.getString("templateId") ?? "0")
        let templateArgs = (call.getObject(_:defaultValue:)("templateArgs") ?? [:]) as! [String:String]
        let path = templateArgs["product_path"] ?? ""
        let requestUrl = hostname + "/" + path
        
        // 카카오톡 설치여부 확인
        if LinkApi.isKakaoLinkAvailable() {
            // 카카오톡으로 카카오링크 공유 가능
            LinkApi.shared.scrapLink(requestUrl: requestUrl, templateId: templateId, templateArgs: templateArgs) {(linkResult, error) in
                if let error = error {
                    print(error)
                }
                else {
                    print("scrapLink() success.")
                    if let linkResult = linkResult {
                        UIApplication.shared.open(linkResult.url, options: [:], completionHandler: nil)
                    }
                }
            }
        } else {
            // 카카오톡 미설치: 웹 공유 사용 권장
            // Custom WebView 또는 디폴트 브라우져 사용 가능
            // 웹 공유 예시 코드
            if let url = LinkApi.shared.makeSharerUrlforScrapLink(requestUrl: requestUrl, templateId: templateId) {
                if UIApplication.shared.canOpenURL(url) {
                    UIApplication.shared.open(url, options: [:], completionHandler: nil)
                    print("웹 present success")
                }
            }
        }
        call.success()
    }
}
