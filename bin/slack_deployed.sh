#!/usr/bin/env bash
# デプロイされたURLをSlackに通知するスクリプト
# 使い方は
# $ ./slack_deployed.sh https://example.com
# のように、通知したいURLを後ろにつけて呼び出す

# 引数を変数に格納
DEPLOYED_URL=${1:-not_set}

set +xe # デバッグ出力をオフにする
echo -e "\n\n"
printf '🎉\e[34m Success! \e[m🎉\n'
printf '\e[34m The deployed URL: \e[m '${DEPLOYED_URL}"\n"

# デプロイ結果をSlackに通知
curl -X POST -H 'Content-type: application/json' \
  --data '{"text": "Thank you for your commit! Welcome Our Channel",
           "username": "CPL",
           "channel": "#website",
           "icon_emoji": ":tada:",
           }' \
https://hooks.slack.com/services/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

