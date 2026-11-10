# 2026-11-10 14:33:51 by RouterOS 7.25.1
# software id = MIS5-4LDR
#
# model = RBcAPGi-5acD2nD
# serial number = HM60BA9CS6R
/interface list
add comment=defconf name=WAN
add comment=defconf name=LAN
/ip neighbor discovery-settings
set discover-interface-list=LAN
/interface wireless security-profiles
set [ find default=yes ] supplicant-identity=MikroTik
/ip dns static
add address=192.168.88.1 comment=defconf name=router.lan type=A
add address=192.168.54.21 name=sftp.liplast.by ttl=12w6d type=A
add address=192.168.54.27 name=onlyoffice.liplast.by ttl=12w6d type=A
/ip pool
add name=default-dhcp ranges=192.168.88.10-192.168.88.254
/ip ssh
set known-hosts-trusted-subnets=192.168.54.21/32
/ip ssh known-hosts
add comment="sftp server" host=192.168.54.21 key="ssh-rsa AAAAB3NzaC1yc2EAAAAD\
    AQABAAACAQC97oAPtB68Q0o3MARD7TCEGHQN5ddR57AxyJzfVA9GSIaoXdvNwbM3a0aQBcYkO1\
    Nwrqj9RJ1jZADmv6xOXuX/DGjRSV5nf9Wm+s3lP+92lY0hYh4Dv2VTaLGU2kcJr6skIhbhrjf5\
    l1u2ZQWuv7O8tz2GipJeIXrM6GHpzb41KYjBM1CsredTDZagW+ySLCVIsBIQTb5mR2s3Vtv2Pr\
    4Kb/2xxkeEZa30/+2FMqIMXKaOXU2J4Urjm4lbTXpEQizl4BbkUHZ+R40AodyhxHRcB6Qt3z2U\
    QpjmR/jGtxNMuA/BDFIQi6p9jB7JvERHLD8yoHicNyBXObIj5xNDXJS2H5XDvSuD2HcHLjsOdX\
    I09tSdVRaxcVDkAYSRCgGxTPIp33s1OO6sF/uFO7NUNVePHIX8GsAn0Lrp43omF62p418LpeRM\
    yb2PgtWtx9durQ0QD1YWCoG+Tjj/xymJEnYExlza8m5kuJ0C7ijvIDxsFc82hzULS/hxWq+1Ld\
    Szn9kaP930FbPzufHG3jWrwEP1fvzQk82Z7ccr0sLYdHGnklmay3JtyTtySrS+Cz41ojUJGzqR\
    KEC8+hvZ2VScyBbL+/GZG8gMe5ApA/JncheUZgNBqrx96d25HSgiun1FAGaJRdmgyArE0D74bO\
    XHI8Gbuz7Su6HWY+q0qLw8VpUGHQ=="
/ipv6 firewall address-list
add address=::/128 comment="defconf: unspecified address" list=bad_ipv6
add address=::1/128 comment="defconf: lo" list=bad_ipv6
add address=fec0::/10 comment="defconf: site-local" list=bad_ipv6
add address=::ffff:0.0.0.0/96 comment="defconf: ipv4-mapped" list=bad_ipv6
add address=::/96 comment="defconf: ipv4 compat" list=bad_ipv6
add address=100::/64 comment="defconf: discard only " list=bad_ipv6
add address=2001:db8::/32 comment="defconf: documentation" list=bad_ipv6
add address=2001:10::/28 comment="defconf: ORCHID" list=bad_ipv6
add address=3ffe::/16 comment="defconf: 6bone" list=bad_ipv6
/interface bridge
add admin-mac=D0:EA:11:3D:7F:C6 auto-mac=no comment=defconf name=bridge
/interface wireless
# managed by CAPsMAN
# channel: 2452/20/gn(18dBm), SSID: lps2lan, CAPsMAN forwarding
set [ find default-name=wlan1 ] band=2ghz-b/g/n channel-width=20/40mhz-XX \
    distance=indoors frequency=auto mode=ap-bridge ssid=MikroTik-3D7FC7 \
    wireless-protocol=802.11
# managed by CAPsMAN
# channel: 5280/20/ac/DP(17dBm), SSID: lps5lan, CAPsMAN forwarding
set [ find default-name=wlan2 ] band=5ghz-a/n/ac channel-width=\
    20/40/80mhz-XXXX distance=indoors frequency=auto mode=ap-bridge ssid=\
    MikroTik-3D7FC7 wireless-protocol=802.11
/disk settings
set auto-media-interface=bridge auto-media-sharing=yes auto-smb-sharing=yes
/interface list member
add comment=defconf interface=bridge list=LAN
add comment=defconf interface=ether1 list=WAN
/interface wifi cap
set caps-man-addresses=192.168.54.1 discovery-interfaces=wlan1,wlan2
/interface wireless cap
# 
set caps-man-addresses=192.168.4.1 enabled=yes interfaces=wlan1,wlan2
/ip dhcp-client
add interface=bridge name=dhcp
/ip dns
set allow-remote-requests=yes
/ipv6 firewall filter
add action=accept chain=input comment=\
    "defconf: accept established,related,untracked" connection-state=\
    established,related,untracked
add action=drop chain=input comment="defconf: drop invalid" connection-state=\
    invalid
add action=accept chain=input comment="defconf: accept ICMPv6" protocol=\
    icmpv6
add action=accept chain=input comment="defconf: accept UDP traceroute" \
    dst-port=33434-33534 protocol=udp
add action=accept chain=input comment=\
    "defconf: accept DHCPv6-Client prefix delegation." dst-port=546 protocol=\
    udp src-address=fe80::/10
add action=accept chain=input comment="defconf: accept IKE" dst-port=500,4500 \
    protocol=udp
add action=accept chain=input comment="defconf: accept ipsec AH" protocol=\
    ipsec-ah
add action=accept chain=input comment="defconf: accept ipsec ESP" protocol=\
    ipsec-esp
add action=accept chain=input comment=\
    "defconf: accept all that matches ipsec policy" ipsec-policy=in,ipsec
add action=drop chain=input comment=\
    "defconf: drop everything else not coming from LAN" in-interface-list=\
    !LAN
add action=fasttrack-connection chain=forward comment="defconf: fasttrack6" \
    connection-state=established,related
add action=accept chain=forward comment=\
    "defconf: accept established,related,untracked" connection-state=\
    established,related,untracked
add action=drop chain=forward comment="defconf: drop invalid" \
    connection-state=invalid
add action=drop chain=forward comment=\
    "defconf: drop packets with bad src ipv6" src-address-list=bad_ipv6
add action=drop chain=forward comment=\
    "defconf: drop packets with bad dst ipv6" dst-address-list=bad_ipv6
add action=drop chain=forward comment="defconf: rfc4890 drop hop-limit=1" \
    hop-limit=equal:1 protocol=icmpv6
add action=accept chain=forward comment="defconf: accept ICMPv6" protocol=\
    icmpv6
add action=accept chain=forward comment="defconf: accept HIP" protocol=139
add action=accept chain=forward comment="defconf: accept IKE" dst-port=\
    500,4500 protocol=udp
add action=accept chain=forward comment="defconf: accept ipsec AH" protocol=\
    ipsec-ah
add action=accept chain=forward comment="defconf: accept ipsec ESP" protocol=\
    ipsec-esp
add action=accept chain=forward comment=\
    "defconf: accept all that matches ipsec policy" ipsec-policy=in,ipsec
add action=drop chain=forward comment=\
    "defconf: drop everything else not coming from LAN" in-interface-list=\
    !LAN
/system clock
set time-zone-name=Europe/Minsk
/system identity
set name=cap-ac-ekvator-floor5
/system routerboard mode-button
set enabled=yes on-event=dark-mode
/system scheduler
add !days interval=1w name="Backup to FTP" on-event=\
    "/system script run backup_to_ftp" policy=\
    ftp,reboot,read,write,policy,test,password,sniff,sensitive,romon \
    start-date=2019-12-01 start-time=03:00:00
/system script
add comment=defconf dont-require-permissions=no name=dark-mode owner=*sys \
    policy=ftp,reboot,read,write,policy,test,password,sniff,sensitive,romon \
    source="\r\
    \n   :if ([system leds settings get all-leds-off] = \"never\") do={\r\
    \n     /system leds settings set all-leds-off=immediate \r\
    \n   } else={\r\
    \n     /system leds settings set all-leds-off=never \r\
    \n   }\r\
    \n "
add dont-require-permissions=no name=backup_to_ftp owner=admin policy=\
    ftp,reboot,read,write,policy,test,password,sniff,sensitive,romon source="{\
    \n:log info \"Starting Backup Script...\";\
    \n:local sysname [/system identity get name];\
    \n:local ftpuser \"ftp_mikro\";\
    \n:local ftpaddr \"sftp://sftp.liplast.by:2022\";\
    \n\
    \n:local tmpdate [/system clock get date];\
    \n:local months (\"jan\",\"feb\",\"mar\",\"apr\",\"may\",\"jun\",\"jul\",\
    \"aug\",\"sep\",\"oct\",\"nov\",\"dec\");\
    \n:local month [ :pick \$tmpdate 0 3 ];\
    \n:local mm ([ :find \$months \$month -1 ] + 1);\
    \n:if (\$mm < 10) do={ :set mm (\"0\" . \$mm); }\
    \n:local date ([:pick \$tmpdate 7 11] . \$mm . [:pick \$tmpdate 4 6])\
    \n\
    \n:log info \"Deleting last Backups...\";\
    \n:foreach i in=[/file find] do={:if ([:typeof [:find [/file get \$i name]\
    \_\"\$sysname_\"]]!=\"nil\") do={/file remove \$i}};\
    \n:delay 5;\
    \n:local backupfile (\"\$sysname_\" . \$date . \".backup\");\
    \n:log info \"Creating new Full Backup file...\";\
    \n/system backup save name=\$backupfile;\
    \n:delay 5;\
    \n:local exportfile (\"\$sysname_\" . \$date . \".rsc\");\
    \n:log info \"Creating new Setup Script file...\";\
    \n/export file=\$exportfile;\
    \n:delay 5;\
    \n:log info \"Send Full Backup file to FTP\";\
    \n/tool fetch url=\"\$ftpaddr/\$backupfile\" user=\$ftpuser upload=yes src\
    -path=\$backupfile;\
    \n:delay 5;\
    \n:log info \"Send Setup Script file to FTP\";\
    \n/tool fetch url=\"\$ftpaddr/\$exportfile\" user=\$ftpuser upload=yes src\
    -path=\$exportfile;\
    \n:log info \"Backuping completed.\";\
    \n}\
    \n"
/tool mac-server
set allowed-interface-list=LAN
/tool mac-server mac-winbox
set allowed-interface-list=LAN
/user ssh-keys
add info=root@sftp.liplast.by key="ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDPtgJ\
    MMUFNWSf/zIDIdRq59BfH+IcmvtXxpOPRgiq1Mzw0acv4eTHl+bFG2NzGRa9F1mQ+njn8pdSnF\
    xAcWFcYLvF4WvX+DESLMWp5fE5E9UXjBDDXJOVJ8r5uleLmM2A5AwPLTaLo8vq8JJtnGoWgrl8\
    ff43bQmMwNI3hMxpXKT0Ryp/zpANxvENz+WIK4I5WtVZ88PIQY2qZuob8ZPeU6y21m6g6A7qnQ\
    7aPV+B6qwTAp+oXgioDjYDLEhEjKJuGglcydchoiYK3DQr2gPNHX4ANX355LQUcZq9+F9ZqQjE\
    +qd1dw/D0aJSin8MBQWqwhgpktlWQKldaFNYjv/1RDevhR8tFZZE9gqqJsGQqBbmnd4YIeUILE\
    3nbYZ/Ymr23SB+FxKglp+iOCoUXth8zlhWe07V81TU3QwdWb9suY3P20TTQtJuJuC9pfD6dlQP\
    eimXrl7IFKNHpejuOWXA3f2lk11Hh+MVpuOyy9hh2WYyAQUuiK9elGNm9F9yq1X0=" user=\
    admin
/interface bridge port
add bridge=bridge comment=defconf interface=ether2
add bridge=bridge interface=ether1
