from pythonping import ping

shit = ping('192.168.25.1', verbose=True, timeout=1)

print(shit.rtt_avg)